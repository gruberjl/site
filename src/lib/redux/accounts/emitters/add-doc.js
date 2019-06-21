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
    apiToken: '',
    apiSecret: '',
    followBack: false
  }

  emit.setDoc('accounts', doc)
}
