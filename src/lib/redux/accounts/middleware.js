import {firestore} from '../../firestore'
import {docsHaveChanged} from '../emitters'
import {setCollection} from '../collections'

let listener

const fetchAccountDocs = () => next => action => {
  if (action.type === 'hasLoggedIn') {
    const collection = setCollection('accounts', firestore.db.collection('root').doc(action.user.uid).collection('accounts'))
    listener = collection.onSnapshot(docsHaveChanged('accounts'))
  }

  next(action)
}

const stopFetchingAccountDocs = () => next => action => {
  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    if (listener) listener()
    listener = undefined
    setCollection('journals', undefined)
  }

  next(action)
}

export const accountsMiddleware = [fetchAccountDocs, stopFetchingAccountDocs]
