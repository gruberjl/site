import React from 'react'
import clone from 'clone-deep'
import {Draft} from 'components'
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import {connect} from 'react-redux'
import {redux} from 'lib'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {editorState: EditorState.createEmpty()}

    if (props.doc) {
      this.state.editorState = EditorState.createWithContent(convertFromRaw(this.props.doc.content))
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.doc !== prevProps.doc) {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(this.props.doc.content))
      })
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  save = () => {
    const raw = convertToRaw(this.state.editorState.getCurrentContent())
    if (JSON.stringify(raw) !== JSON.stringify(this.props.doc.content)) {
      const doc = clone(this.props.doc)
      doc.content = raw
      redux.emit.db.setDoc('journals', doc)
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

const mapStateToProps = state => {
  return {
    doc: state.journals.docs[state.journals.activePageId]
  }
}

export default connect(mapStateToProps)(Content)
