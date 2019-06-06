import {firebase} from './firebase'

export const signup = async (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => ({error}))
