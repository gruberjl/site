import {firestore} from '../../firestore'
import {collectionNames, setCollection} from './collections'
import {setListener, getListener} from './listeners'

export const startWatchingDb = (uid, docsHaveChanged) => {
  collectionNames.forEach(collectionName => {
    const collection = setCollection(collectionName, firestore.db.collection(collectionName))
    setListener(collectionName, collection.where('uid', '==', uid)).onSnapshot(docsHaveChanged(collectionName))
  })
}

export const stopWatchingDb = () => {
  collectionNames.forEach(collectionName => {
    const listener = getListener(collectionName)
    if (listener) listener()
    setListener(collectionName, undefined)
    setCollection(collectionName, undefined)
  })
}
