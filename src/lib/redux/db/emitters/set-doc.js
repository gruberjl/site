import {store} from '../../store'
import clone from 'clone-deep'

export const setDoc = (collectionName, originalDoc) => {
  const doc = clone(originalDoc)
  doc.uid = store.getState().auth.user.uid

  store.dispatch({
    type: 'setDoc',
    collectionName,
    doc
  })
}
