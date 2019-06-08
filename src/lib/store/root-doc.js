import {firestore} from '../firestore'
import EventEmitter  from 'events'
import {auth} from './auth'

class RootDoc extends EventEmitter {
  constructor() {
    super()

    auth.once(auth.events.login, this.onLogin)
  }

  doc = {}

  events = {
    docChanged: 'docChanged'
  }

  onLogin = (user) => {
    this.listener = firestore.db.collection('root').doc(user.uid).onSnapshot(this.onDocChange)
  }

  onLogoff = () => {
    this.doc = {}
    this.listener()
    auth.once(auth.events.login, this.onLogin)
  }

  onDocChange = async (snapshot) => {
    if (snapshot.exists) {
      this.doc = snapshot.data()
      this.emit(this.events.docChanged, this.doc)
    } else {
      const {error} = await firestore.set(firestore.db.collection('root'), {id:auth.user.uid})
      if (error) {
        console.error('error creating root doc in src/lib/firestore/watch/root-doc.js')
        console.error(error.message)
      }
    }
  }
}

export const rootDoc = new RootDoc()
