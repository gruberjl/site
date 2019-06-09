import React from 'react'
import {store} from 'lib'
import {TaskHoc} from 'components'

const {tasks} = store

export class TasksHoc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: tasks.isLoaded,
      tasks: Object.values(tasks.docs),
      newTask: tasks.create()
    }
  }

  componentDidMount() {
    tasks.on(tasks.events.docsUpdated, this.onTasksChange)
  }

  componentWillUnmount() {
    tasks.removeListener(tasks.events.docsUpdated, this.onTasksChange)
  }

  onTasksChange = (docs) => {
    const newTask = docs[this.state.newTask.id]
      ? tasks.create()
      : this.state.newTask

    this.setState({
      isLoaded: tasks.isLoaded,
      tasks: Object.values(docs),
      newTask
    })
  }

  render() {
    return (
      <div className="is-full-width">
        <div className="tasks-container">
          { this.state.tasks.map(task => (
            <TaskHoc key={task.id} task={task} />
          )) }
          <TaskHoc task={this.state.newTask}/>
        </div>
      </div>
    )
  }
}
