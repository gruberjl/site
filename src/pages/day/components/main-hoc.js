import React from 'react'
import clone from 'clone-deep'
import {connect} from 'react-redux'
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import {store} from 'lib'
import {Main} from './Main'

const {questions} = store

class MainHoc extends React.Component {
  constructor(props) {
    super(props)

    const questionDoc = questions.getOrCreate(props.date)

    this.state = {
      isLoaded: questions.isLoaded,
      questionDoc,
      willEditor:EditorState.createWithContent(convertFromRaw(questionDoc.will)),
      didEditor:EditorState.createWithContent(convertFromRaw(questionDoc.did))
    }

    questions.on(questions.events.docsUpdated, this.onQuestionsChange)
  }

  onQuestionsChange = () => {
    this.setState(state => {
      const questionDoc = questions.getOrCreate(this.props.date)

      return {
        questionDoc,
        isLoaded: questions.isLoaded,
        willEditor: state.isLoaded
          ? state.willEditor
          : EditorState.createWithContent(convertFromRaw(questionDoc.will)),
        didEditor: state.isLoaded
          ? state.didEditor
          : EditorState.createWithContent(convertFromRaw(questionDoc.did))
      }
    })
  }

  onWillEditorChange = (editorState) => {
    this.setState({
      willEditor:editorState
    })

    const raw = convertToRaw(editorState.getCurrentContent())
    if (JSON.stringify(raw) !== JSON.stringify(this.state.questionDoc.will)) {
      const doc = clone(this.state.questionDoc)
      doc.will = raw
      questions.set(doc)
    }
  }

  onDidEditorChange = (editorState) => {
    this.setState({
      didEditor:editorState
    })

    const raw = convertToRaw(editorState.getCurrentContent())
    if (JSON.stringify(raw) !== JSON.stringify(this.state.questionDoc.did)) {
      const doc = clone(this.state.questionDoc)
      doc.did = raw
      questions.set(doc)
    }
  }

  render() {
    return <Main
      date={this.props.date}
      {...this.state}
      onWillEditorChange={this.onWillEditorChange}
      onDidEditorChange={this.onDidEditorChange}
    />
  }
}

export default connect()(MainHoc)
