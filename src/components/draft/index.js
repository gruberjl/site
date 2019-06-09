import React from 'react'
import Editor from 'draft-js-plugins-editor'
import {getDefaultKeyBinding, RichUtils} from 'draft-js'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import createLinkPlugin from 'draft-js-anchor-plugin'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin'
import createFocusPlugin from 'draft-js-focus-plugin'

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton
} from 'draft-js-buttons'

import 'draft-js-inline-toolbar-plugin/lib/plugin.css'
import 'draft-js-linkify-plugin/lib/plugin.css'
import 'draft-js-anchor-plugin/lib/plugin.css'
import 'draft-js-focus-plugin/lib/plugin.css'
import 'draft-js-image-plugin/lib/plugin.css'

export class Draft extends React.Component {
  constructor(props) {
    super(props)

    this.inlineToolbarPlugin = createInlineToolbarPlugin()
    this.linkPlugin = createLinkPlugin()
    this.linkifyPlugin = createLinkifyPlugin()
    this.markdownPlugin = createMarkdownShortcutsPlugin()
    this.focusPlugin = createFocusPlugin()

    this.focus = this.focus.bind(this)
    this.bindKeys = this.bindKeys.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
  }

  focus() {
    this.editor.focus()
  }

  handleKeyCommand(command) {
    if (command === 'bold') {
      this.props.onChange(state => ({
        editorState: RichUtils.toggleInlineStyle(state.editorState, 'BOLD')
      }))
      return 'handled'
    } else if (command === 'italic') {
      this.props.onChange(state => ({
        editorState: RichUtils.toggleInlineStyle(state.editorState, 'ITALIC')
      }))
      return 'handled'
    } else if (command === 'underline') {
      this.props.onChange(state => ({
        editorState: RichUtils.toggleInlineStyle(state.editorState, 'UNDERLINE')
      }))
      return 'handled'
    }

    return 'not-handled'
  }

  bindKeys(e) {
    return getDefaultKeyBinding(e)
  }

  render() {
    return (
      <div className="is-full-width box" onClick={this.focus}>
        <Editor
          editorState={this.props.editorState}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          ref={(element) => { this.editor = element }}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={this.bindKeys}
          autoComplete="on"
          spellCheck={true}
          onBlur={this.props.onBlur}
          editorKey={this.props.editorKey}
          plugins={[
            this.inlineToolbarPlugin,
            this.linkPlugin,
            this.linkifyPlugin,
            this.markdownPlugin,
            this.focusPlugin
          ]}
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
                <this.linkPlugin.LinkButton {...externalProps} />
              </div>
            )
          }
        </this.inlineToolbarPlugin.InlineToolbar>
      </div>
    )
  }
}
