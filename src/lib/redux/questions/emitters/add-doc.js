import {convertToRaw, EditorState} from 'draft-js'
import {emit} from '../../emit'

export const addDoc = (date) => {
  const doc = {
    id: date,
    will: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    did: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    done: ''
  }

  emit.db.setDoc('questions', doc)
}
