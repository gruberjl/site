import React from 'react'
import {Editor, EditorState} from 'draft-js'

export class GoodDid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}

    this.onChange = this.onChange.bind(this)
  }

  onChange(editorState) {
    this.setState({editorState})
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder="What good will you do today?"
      />
    )
  }
}
