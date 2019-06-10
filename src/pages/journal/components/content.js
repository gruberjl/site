import React from 'react'
import clone from 'clone-deep'
import {Draft} from 'components'
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import {store} from 'lib'

const {journals} = store

export class Content extends React.Component {
  constructor() {
    super()

    if (journals.activePage == '') {
      this.state = {doc: {}}
    } else {
      this.state = {doc:journals.docs[journals.activePage]}
      this.state.editorState = EditorState.createWithContent(convertFromRaw(this.state.doc.content))
    }
  }

  componentDidMount() {
    journals.on(journals.events.activePageChanged, this.onActivePageChanged)
  }

  componentWillUnmount() {
    journals.removeListener(journals.events.activePageChanged, this.onActivePageChanged)
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  onActivePageChanged = (pageId) => {
    this.setState({
      doc: journals.docs[pageId],
      editorState: EditorState.createWithContent(convertFromRaw(journals.docs[pageId].content))
    })
  }

  save = () => {
    const raw = convertToRaw(this.state.editorState.getCurrentContent())
    if (JSON.stringify(raw) !== JSON.stringify(this.state.doc.content)) {
      const doc = clone(this.state.doc)
      doc.content = raw
      journals.set(doc)
    }
  }

  render() {
    if (!this.state.editorState)
      return (<div></div>)

    return (
      <main className="container">
        <div className="level">
          <div className="is-full-width">
            <Draft
              placeholder="Write your important notes"
              editorState={this.state.editorState}
              onChange={this.onChange}
              onBlur={this.save}
            />
          </div>
        </div>
      </main>
    )
  }
}
