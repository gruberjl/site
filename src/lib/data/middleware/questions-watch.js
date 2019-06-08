import {actions} from '../actions'
import {firestore} from 'lib'
import {isLogin} from '../is'

let listener

export const questionsWatch = store => next => action => {
  if (isLogin(action)) {
    if (listener) listener()

    const userId = firestore.firebase.auth().currentUser.uid
    const collection = firestore.db.collection('root').doc(userId).collection('questions')

    listener = collection.onSnapshot(snapshot => {
      const docs = {}

      snapshot.forEach(doc => {
        docs[doc.id] = doc.data()
      })

      store.dispatch({
        type: actions.questionsUpdated,
        docs,
        fromCache: snapshot.metadata.fromCache
      })
    })
  }

  if (action.type == actions.signout) {
    firestore.watch.stopQuestions()
  }

  return next(action)
}
