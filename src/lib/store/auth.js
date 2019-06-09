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
    logout: 'logout',
    toggleSignupModal: 'TOGGLE_SIGNUP_MODAL',
    toggleSigninModal: 'TOGGLE_SIGNIN_MODAL'
  }

  isLoggedIn = false

  signup = (email, password) => {
    return firestore.signup(email, password)
  }

  signin = (email, password) => {
    return firestore.signin(email, password)
  }

  signout = () => {
    return firestore.signout()
  }

  onAuthStateChanged = (user) => {
    this.user = user
    this.emit(this.events.onAuthStateChanged, user)

    if (user) {
      this.isLoggedIn = true
      this.emit(this.events.login, user)
      this.emit(this.events.toggleSignupModal, {isOpen: false})
      this.emit(this.events.toggleSigninModal, {isOpen: false})
    } else {
      this.isLoggedIn = false
      this.emit(this.events.logout)
    }
  }
}

export const auth = new Auth()
