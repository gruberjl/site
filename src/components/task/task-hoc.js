import React from 'react'
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import clone from 'clone-deep'
import {Draft} from 'components'
import {store} from 'lib'

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
      store.tasks.set(task)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.task.id !== prevProps.task.id) {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(this.props.task.content))
      })
    }
  }

  render() {
    return (
      <div>
        <Draft
          placeholder="Add a task"
          editorState={this.state.editorState}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
      </div>
    )
  }
}
