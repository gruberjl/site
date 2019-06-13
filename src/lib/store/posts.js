import {firestore} from '../firestore'
import EventEmitter  from 'events'
import {auth} from './auth'

class Posts extends EventEmitter {
  constructor() {
    super()
    auth.once(auth.events.login, this.onLogin)
  }

  docs = {}
  isLoaded = false

  events = {
    docsUpdated: 'docsUpdated'
  }

  onLogin = (user) => {
    this.collection = firestore.db.collection('root').doc(user.uid).collection('posts')
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

  create = (stream) => {
    const doc = {
      id: stream.id,
      name: stream.name,
      streamId: stream.id,
      posts: [],
      since_id: ''
    }

    return doc
  }

  set(doc) {
    firestore.set(this.collection, doc)
  }
}

export const posts = new Posts()
