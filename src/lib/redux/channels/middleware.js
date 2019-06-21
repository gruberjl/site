import {firestore} from '../../firestore'
import {docsHaveChanged} from '../emitters'
import {setCollection} from '../collections'

let listener

const fetchChannelDocs = () => next => action => {
  if (action.type === 'hasLoggedIn') {
    const collection = setCollection('channels', firestore.db.collection('root').doc(action.user.uid).collection('channels'))
    listener = collection.onSnapshot(docsHaveChanged('channels'))
  }

  next(action)
}

const stopFetchingChannelDocs = () => next => action => {
  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    if (listener) listener()
    listener = undefined
    setCollection('channels', undefined)
  }

  next(action)
}

export const channelsMiddleware = [fetchChannelDocs, stopFetchingChannelDocs]
