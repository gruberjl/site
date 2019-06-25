import shortid from 'shortid'
import {emit} from '../../emit'

export const addDoc = () => {
  const doc = {
    id: shortid.generate(),
    name: 'engagement'
  }

  emit.db.setDoc('engagements', doc)
}
