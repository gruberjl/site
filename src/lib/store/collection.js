import {firestore} from '../firestore'
import EventEmitter  from 'events'
import {auth} from './auth'

export class Collection extends EventEmitter {
  constructor(collectionName) {
    super()
    this.collectionName = collectionName
    auth.once(auth.events.login, this.onLogin)
  }

  docs = {}
  isLoaded = false

  events = {
    docsUpdated: 'docsUpdated'
  }

  onLogin = (user) => {
    this.collection = firestore.db.collection('root').doc(user.uid).collection(this.collectionName)
    this.listener = this.collection.onSnapshot(this.onDocsChange)
  }

  onLogoff = () => {
    this.docs = {}
    this.isLoaded = false
    if (this.listener) this.listener()
    this.listener = undefined
    this.collection = undefined
    auth.once(auth.events.login, this.onLogin)
  }

  onDocsChange = (snapshot) => {
    snapshot.forEach(doc => {
      this.docs[doc.id] = doc.data()
    })

    this.isLoaded = true
    this.emit(this.events.docsUpdated, this.docs, snapshot.metadata.fromCache)
  }

  set(doc) {
    firestore.set(this.collection, doc)
  }
}
