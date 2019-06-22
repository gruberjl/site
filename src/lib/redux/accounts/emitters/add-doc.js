import shortid from 'shortid'
import {emit} from '../../emit'

export const addDoc = () => {
  const doc = {
    id: shortid.generate(),
    name: '',
    provider: '',
    username: '',
    accessToken: '',
    accessSecret: '',
    followBack: false
  }

  emit.db.setDoc('accounts', doc)
}
