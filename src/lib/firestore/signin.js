import {firebase} from './firebase'

export const signin = async (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => ({error}))
