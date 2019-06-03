import React from 'react'
import Editor from 'draft-js-plugins-editor'
import {EditorState} from 'draft-js'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton
} from 'draft-js-buttons'

import 'draft-js-inline-toolbar-plugin/lib/plugin.css'

export class GoodDid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.inlineToolbarPlugin = createInlineToolbarPlugin()

    this.onChange = this.onChange.bind(this)
    this.focus = this.focus.bind(this)
  }

  onChange(editorState) {
    this.setState({editorState})
  }

  focus() {
    this.editor.focus()
  }

  render() {
    return (
      <div className="is-full-width box" onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="What good will you do today?"
          plugins={[this.inlineToolbarPlugin]}
          ref={(element) => { this.editor = element }}
        />
        <this.inlineToolbarPlugin.InlineToolbar>
          {
            (externalProps) => (
              <div>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
              </div>
            )
          }
        </this.inlineToolbarPlugin.InlineToolbar>
      </div>
    )
  }
}
