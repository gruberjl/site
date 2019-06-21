import React from 'react'
import clone from 'clone-deep'
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import {Main} from './Main'
import {redux} from 'lib'

export class MainHoc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      willEditor:EditorState.createWithContent(convertFromRaw(props.questionDoc.will)),
      didEditor:EditorState.createWithContent(convertFromRaw(props.questionDoc.did))
    }
  }

  onWillEditorChange = (editorState) => {
    this.setState({
      willEditor:editorState
    })
  }

  onDidEditorChange = (editorState) => {
    this.setState({
      didEditor:editorState
    })
  }

  onBlur = () => {
    const newDid = convertToRaw(this.state.didEditor.getCurrentContent())
    const newWill = convertToRaw(this.state.willEditor.getCurrentContent())

    const oldDid = JSON.stringify(this.props.questionDoc.did)
    const oldWill = JSON.stringify(this.props.questionDoc.will)

    if (JSON.stringify(newDid) !== oldDid || JSON.stringify(newWill) !== oldWill) {
      const questionDoc = clone(this.props.questionDoc)
      questionDoc.did = newDid
      questionDoc.will = newWill

      redux.emit.setDoc('questions', questionDoc)
    }
  }

  render() {
    return <Main
      date={this.date}
      {...this.state}
      onWillEditorChange={this.onWillEditorChange}
      onDidEditorChange={this.onDidEditorChange}
      onEditorBlur={this.onBlur}
    />
  }
}
