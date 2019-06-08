import {firestore} from '../firestore'
import EventEmitter  from 'events'

class Auth extends EventEmitter {
  constructor() {
    super()

    firestore.firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  events = {
    onAuthStateChanged: 'onAuthStateChanged',
    login: 'login',
    logout: 'logout'
  }

  onAuthStateChanged = (user) => {
    this.user = user
    this.emit(this.events.onAuthStateChanged, user)

    if (user)
      this.emit(this.events.login, user)
    else
      this.emit(this.events.logout)
  }
}

export const auth = new Auth()
