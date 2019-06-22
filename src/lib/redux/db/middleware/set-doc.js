import {firestore} from '../../../firestore'
import {getCollection} from '../collections'

export const setDoc = () => next => action => {
  if (action.type === 'setDoc') {
    firestore.set(getCollection(action.collectionName), action.doc)
  }

  next(action)
}
