import {firestore} from '../firestore'
import EventEmitter  from 'events'
import shortid from 'shortid'
import {auth} from './auth'

class Channels extends EventEmitter {
  constructor() {
    super()
    auth.once(auth.events.login, this.onLogin)
  }

  docs = {}
  isLoaded = false
  activeTab = ''

  events = {
    docsUpdated: 'docsUpdated',
    activeTabChanged: 'ACTIVE_TAB_CHANGED'
  }

  onLogin = (user) => {
    this.collection = firestore.db.collection('root').doc(user.uid).collection('channels')
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

    if (this.activeTab == '' && Object.keys(this.docs).length > 0)
      this.setActiveTab(Object.values(this.docs)[0].id)
  }

  create = () => {
    const doc = {
      id: shortid.generate(),
      name: 'Channel'
    }

    return doc
  }

  set(doc) {
    firestore.set(this.collection, doc)
  }

  setActiveTab = (tabId) => {
    this.activeTab = tabId
    this.emit(this.events.activeTabChanged, tabId)
  }
}

export const channels = new Channels()
