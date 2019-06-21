import {firestore} from '../../firestore'
import {docsHaveChanged} from '../emitters'
import {setCollection} from '../collections'

let listener

const fetchQuestionDocs = () => next => action => {
  if (action.type === 'hasLoggedIn') {
    const collection = setCollection('questions', firestore.db.collection('root').doc(action.user.uid).collection('questions'))
    listener = collection.onSnapshot(docsHaveChanged('questions'))
  }

  next(action)
}

const stopFetchingQuestionDocs = () => next => action => {
  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    if (listener) listener()
    listener = undefined
    setCollection('questions', undefined)
  }

  next(action)
}

export const questionsMiddleware = [fetchQuestionDocs, stopFetchingQuestionDocs]
