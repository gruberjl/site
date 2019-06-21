import {firestore} from '../../firestore'
import {docsHaveChanged} from '../emitters'
import {setCollection} from '../collections'

let listener

const fetchTaskDocs = () => next => action => {
  if (action.type === 'hasLoggedIn') {
    const collection = setCollection('tasks', firestore.db.collection('root').doc(action.user.uid).collection('tasks'))
    listener = collection.onSnapshot(docsHaveChanged('tasks'))
  }

  next(action)
}

const stopFetchingTaskDocs = () => next => action => {
  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    if (listener) listener()
    listener = undefined
    setCollection('tasks', undefined)
  }

  next(action)
}

export const tasksMiddleware = [fetchTaskDocs, stopFetchingTaskDocs]
