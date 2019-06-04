import React from 'react'
import {insertImage, upload} from './image'

export class ImageButton extends React.Component {
  onImageSelected() {
    const file = this.element.files[0]

    if (!file)
      return

    upload(file).then((img) => {
      const editorState = this.props.getEditorState()
      const newEditorState = insertImage(editorState, img.url)
      this.props.setEditorState(newEditorState)
    })
  }

  openFileBrowser() {
    this.element.click()
  }

  render() {
    return (
      <div className={this.props.theme.buttonWrapper} onMouseDown={e => e.preventDefault()}>
        <button type="button" className={this.props.theme.button} onClick={this.openFileBrowser.bind(this)}>
          <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" />
          </svg>
        </button>
        <input id="upload" ref={(el) => { this.element = el }} type="file" accept="image/*" onChange={this.onImageSelected.bind(this)} className="is-hidden" />
      </div>
    )
  }
}
