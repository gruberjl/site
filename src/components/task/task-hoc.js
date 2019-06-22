import React from 'react'
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import clone from 'clone-deep'
import {Draft} from 'components'
import {redux} from 'lib'
import {DoneCheck} from './done-check'
import {StartPicker} from './start-picker'

export class TaskHoc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(props.task.content))
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  onBlur = () => {
    const raw = convertToRaw(this.state.editorState.getCurrentContent())
    if (JSON.stringify(raw) !== JSON.stringify(this.props.task.content)) {
      const task = clone(this.props.task)
      task.content = raw
      redux.emit.db.setDoc('tasks', task)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.task.id !== prevProps.task.id) {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(this.props.task.content))
      })
    }
  }

  markDone = (done) => {
    const task = clone(this.props.task)
    task.done = done
    redux.emit.db.setDoc('tasks', task)
  }

  setStartDate = (startDate) => {
    const task = clone(this.props.task)
    task.startDate = startDate
    redux.emit.db.setDoc('tasks', task)
  }

  render() {
    return (
      <div className="task-container">
        <DoneCheck
          done={this.props.task.done}
          markDone={this.markDone}
        />
        <div className="task-content-container">
          <Draft
            placeholder="Add a task"
            editorState={this.state.editorState}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        <StartPicker
          startDate={this.props.task.startDate}
          setStartDate={this.setStartDate}
        />
      </div>
    )
  }
}
