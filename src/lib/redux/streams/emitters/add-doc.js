import shortid from 'shortid'
import {emit} from '../../emit'

export const addDoc = () => {
  const doc = {
    id: shortid.generate(),
    name: '',
    accountId: '',
    channelId: '',
    type: ''
  }

  emit.setDoc('streams', doc)
}
