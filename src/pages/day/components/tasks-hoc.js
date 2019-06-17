import React from 'react'
import {store} from 'lib'
import {TaskHoc} from 'components'
import moment from 'moment'

export class TasksHoc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: store.tasks.isLoaded,
      tasks: this.getTasks(store.tasks.filters.today),
      newTask: store.tasks.create(),
      tasksFilter: store.tasks.filters.today
    }
  }

  componentDidMount() {
    store.tasks.on(store.tasks.events.docsUpdated, this.onTasksChange)
  }

  componentWillUnmount() {
    store.tasks.removeListener(store.tasks.events.docsUpdated, this.onTasksChange)
  }

  onTasksChange = (docs) => {
    const newTask = docs[this.state.newTask.id]
      ? store.tasks.create()
      : this.state.newTask

    this.setState(state => ({
      isLoaded: store.tasks.isLoaded,
      tasks: this.getTasks(state.tasksFilter),
      newTask
    }))
  }

  setFilter = (event) => {
    event.preventDefault()
    const tasksFilter = event.target.name
    this.setState({
      tasksFilter,
      tasks: this.getTasks(tasksFilter)
    })
  }

  getTasks = (filter) => {
    const tasks = Object.values(store.tasks.docs)
    if (filter == store.tasks.filters.all)
      return tasks

    if (filter == store.tasks.filters.today)
      return tasks.filter(t => t.startDate <= moment().format('YYYY-MM-DD') && !t.done)

    if (filter == store.tasks.filters.future)
      return tasks.filter(t => t.startDate > moment().format('YYYY-MM-DD') && !t.done)
  }

  render() {
    const {tasks, newTask, tasksFilter} = this.state
    const {filters} = store.tasks

    return (
      <div className="is-full-width">
        <div className="tasks-container">
          { tasks.map(task => (
            <TaskHoc key={task.id} task={task} />
          )) }
          <TaskHoc task={newTask}/>
        </div>
        <nav className="breadcrumb is-centered tasks-toolbar" aria-label="breadcrumbs">
          <ul>
            <li className={tasksFilter == filters.all ? "is-active" : ''}>
              <a name={filters.all} onClick={this.setFilter}>All</a>
            </li>
            <li className={tasksFilter == filters.today ? "is-active" : ''}>
              <a name={filters.today} onClick={this.setFilter}>Today</a>
            </li>
            <li className={tasksFilter == filters.future ? "is-active" : ''}>
              <a name={filters.future} onClick={this.setFilter}>Future</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
