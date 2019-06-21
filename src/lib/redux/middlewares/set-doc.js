import {firestore} from '../../firestore'
import {getCollection} from '../collections'

export const setDoc = store => next => action => { // eslint-disable-line
  if (action.type === 'setDoc') {
    firestore.set(getCollection(action.collectionName), action.doc)
  }

  next(action)
}
