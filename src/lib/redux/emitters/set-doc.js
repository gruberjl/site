import {store} from '../store'

export const setDoc = (collectionName, doc) => {
  store.dispatch({
    type: 'setDoc',
    collectionName,
    doc
  })
}
