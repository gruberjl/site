import {firestore} from '../firestore'
import EventEmitter  from 'events'
import shortid from 'shortid'
import {convertToRaw, EditorState} from 'draft-js'
import {auth} from './auth'

class Journals extends EventEmitter {
  constructor() {
    super()
    auth.once(auth.events.login, this.onLogin)
  }

  docs = {}
  isLoaded = false
  activePage = ''

  events = {
    docsUpdated: 'docsUpdated',
    activePageChanged: 'ACTIVE_PAGE_CHANGED'
  }

  onLogin = (user) => {
    this.collection = firestore.db.collection('root').doc(user.uid).collection('journals')
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

    if (this.activePage == '' && Object.keys(this.docs).length > 0)
      this.setActivePage(Object.values(this.docs)[0].id)
  }

  create = () => {
    const doc = {
      id: shortid.generate(),
      content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
      name: 'page'
    }

    return doc
  }

  set(doc) {
    firestore.set(this.collection, doc)
  }

  setActivePage = (pageId) => {
    this.activePage = pageId
    this.emit(this.events.activePageChanged, pageId)
  }
}

export const journals = new Journals()
