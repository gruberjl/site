import {store} from '../store'

export const docsHaveChanged = (collectionName) => (snapshot) => {
  let docs = {}

  snapshot.forEach(doc => {
    docs[doc.id] = doc.data()
  })

  store.dispatch({
    type: 'docsHaveChanged',
    collectionName,
    docs
  })
}
