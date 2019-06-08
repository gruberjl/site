import EventEmitter  from 'events'
import {convertToRaw, EditorState} from 'draft-js'
import {firestore} from '../firestore'
import {auth} from './auth'

class Questions extends EventEmitter {
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
    this.collection = firestore.db.collection('root').doc(user.uid).collection('questions')
    this.listener = this.collection.onSnapshot(this.onQuestionsChange)
  }

  onLogoff = () => {
    this.docs = {}
    this.isLoaded = false
    if (this.listener) this.listener()
    this.listener = undefined
    this.collection = undefined
    auth.once(auth.events.login, this.onLogin)
  }

  onQuestionsChange = (snapshot) => {
    snapshot.forEach(doc => {
      this.docs[doc.id] = doc.data()
    })

    this.isLoaded = true
    this.emit(this.events.docsUpdated, this.docs, snapshot.metadata.fromCache)
  }

  getOrCreate = (date) => {
    let doc = this.docs[date]
    if (!doc)
      doc = {
        id: date,
        will: convertToRaw(EditorState.createEmpty().getCurrentContent()),
        did: convertToRaw(EditorState.createEmpty().getCurrentContent())
      }

    return doc
  }

  set(doc) {
    firestore.set(this.collection, doc)
  }
}

export const questions = new Questions()
