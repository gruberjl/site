import {firestore} from '../../firestore'
import {docsHaveChanged} from '../emitters'
import {setCollection} from '../collections'

let listener

const fetchStreamDocs = () => next => action => {
  if (action.type === 'hasLoggedIn') {
    const collection = setCollection('streams', firestore.db.collection('root').doc(action.user.uid).collection('streams'))
    listener = collection.onSnapshot(docsHaveChanged('streams'))
  }

  next(action)
}

const stopFetchingStreamDocs = () => next => action => {
  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    if (listener) listener()
    listener = undefined
    setCollection('streams', undefined)
  }

  next(action)
}

export const streamsMiddleware = [fetchStreamDocs, stopFetchingStreamDocs]
