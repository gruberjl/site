import {actions} from '../actions'
import {firestore} from 'lib'

let uid = ''

export const firestoreWatchRootDoc = store => next => action => {
  if (action.type == actions.authChange && action.user && action.user.uid) {
    if (uid !== action.user.uid) {
      uid = action.user.uid
      firestore.watch.rootDoc(uid, (doc) => {
        store.dispatch({
          type: actions.setRootDoc,
          doc
        })
      })
    }
  }

  if (action.type == actions.signout) {
    firestore.watch.stopRootDoc()
  }



  return next(action)
}
