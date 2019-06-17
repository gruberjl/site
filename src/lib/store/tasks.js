import EventEmitter  from 'events'
import shortid from 'shortid'
import moment from 'moment'
import {convertToRaw, EditorState} from 'draft-js'
import {firestore} from '../firestore'
import {auth} from './auth'

class Tasks extends EventEmitter {
  constructor() {
    super()
    auth.once(auth.events.login, this.onLogin)
  }

  docs = {}
  isLoaded = false

  events = {
    docsUpdated: 'docsUpdated'
  }

  filters = {
    all: 'All',
    today: 'Today',
    future: 'Future'
  }

  onLogin = (user) => {
    this.collection = firestore.db.collection('root').doc(user.uid).collection('tasks')
    this.listener = this.collection.onSnapshot(this.onTasksChange)
  }

  onLogoff = () => {
    this.docs = {}
    this.isLoaded = false
    if (this.listener) this.listener()
    this.listener = undefined
    this.collection = undefined
    auth.once(auth.events.login, this.onLogin)
  }

  onTasksChange = (snapshot) => {
    snapshot.forEach(doc => {
      this.docs[doc.id] = doc.data()
    })

    this.isLoaded = true
    this.emit(this.events.docsUpdated, this.docs, snapshot.metadata.fromCache)
  }

  create = () => {
    const doc = {
      id: shortid.generate(),
      content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
      startDate: moment().format('YYYY-MM-DD'),
      done: ''
    }

    return doc
  }

  set(doc) {
    firestore.set(this.collection, doc)
  }
}

export const tasks = new Tasks()
