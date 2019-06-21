import {firestore} from '../../firestore'
import {docsHaveChanged} from '../emitters'
import {setCollection} from '../collections'

let listener

const fetchJournalDocs = store => next => action => { // eslint-disable-line
  if (action.type === 'hasLoggedIn') {
    const collection = setCollection('journals', firestore.db.collection('root').doc(action.user.uid).collection('journals'))
    listener = collection.onSnapshot(docsHaveChanged('journals'))
  }

  next(action)
}

const stopFetchingJournalDocs = store => next => action => { // eslint-disable-line
  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    if (listener) listener()
    listener = undefined
    setCollection('journals', undefined)
  }

  next(action)
}

export const journalsMiddleware = [fetchJournalDocs, stopFetchingJournalDocs]
