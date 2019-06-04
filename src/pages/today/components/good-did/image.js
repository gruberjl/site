import {EditorState, AtomicBlockUtils} from 'draft-js'

export const isImage = file => file.type.includes('image')

export const insertImage = (editorState, src) => {
  const contentState = editorState.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity(
    'image',
    'IMMUTABLE',
    {src}
  )
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
  const newEditorState = EditorState.set(editorState, {
    currentContent: contentStateWithEntity
  })
  return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
}

export const readImageAsDataUrl = (image, callback) => {
  const reader = new FileReader()
  reader.onloadend = () => {
    callback(reader.result)
  }
  reader.readAsDataURL(image)
}

export const upload = async (file) => {
  const data = new FormData()
  data.append('file', file)

  const response = await fetch('/api/images/create', {
    method: 'POST',
    body: data
  })

  const r = await response.json()

  return r
}

export const uploadImage = upload
