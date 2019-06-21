import React from 'react'
import {TaskHoc} from 'components'
import moment from 'moment'
import {connect} from 'react-redux'
import shortid from 'shortid'
import {convertToRaw, EditorState} from 'draft-js'

const newTask = () => {
  return {
    id: shortid.generate(),
    content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    startDate: moment().format('YYYY-MM-DD'),
    done: ''
  }
}

const filters = {
  all: 'All',
  today: 'Today',
  future: 'Future'
}

class TasksHoc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newTask: newTask(),
      tasksFilter: 'Today'
    }
  }

  componentDidUpdate() {
    if (this.props.docs[this.state.newTask.id]) {
      this.setState({
        newTask: newTask()
      })
    }
  }

  setFilter = (event) => {
    event.preventDefault()
    const tasksFilter = event.target.name
    this.setState({
      tasksFilter
    })
  }

  getTasks = (filter) => {
    const tasks = Object.values(this.props.docs)
    if (filter == filters.all)
      return tasks

    if (filter == filters.today)
      return tasks.filter(t => t.startDate <= moment().format('YYYY-MM-DD') && !t.done)

    if (filter == filters.future)
      return tasks.filter(t => t.startDate > moment().format('YYYY-MM-DD') && !t.done)
  }

  render() {
    const {newTask, tasksFilter} = this.state
    const tasks = this.getTasks(tasksFilter)

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

const mapStateToProps = state => {
  return {
    docs: state.tasks.docs,
    isLoaded: state.tasks.isLoaded
  }
}

export default connect(mapStateToProps)(TasksHoc)
