import shortid from 'shortid'
import {convertToRaw, EditorState} from 'draft-js'
import {emit} from '../../emit'

export const addPage = () => {
  const doc = {
    id: shortid.generate(),
    content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    name: 'page'
  }

  emit.db.setDoc('journals', doc)
}
