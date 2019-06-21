import {firestore} from '../../../firestore'
import {store} from '../../store'

const onAuthStateChanged = (user) => {
  if (user)
    onLogin(user)
  else
    onLogout
}

const onLogin = (user) => {
  store.dispatch({
    type: 'hasLoggedIn',
    user
  })
}

const onLogout = () => {
  store.dispatch({
    type: 'hasLoggedOut'
  })
}

firestore.firebase.auth().onAuthStateChanged(onAuthStateChanged)
