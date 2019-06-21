import shortid from 'shortid'
import {convertToRaw, EditorState} from 'draft-js'
import {emit} from '../../emit'
import moment from 'moment'

export const addDoc = () => {
  const doc = {
    id: shortid.generate(),
    content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    startDate: moment().format('YYYY-MM-DD'),
    done: ''
  }

  emit.setDoc('tasks', doc)
}
