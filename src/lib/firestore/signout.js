import {firebase} from './firebase'

export const signout = async () =>
  firebase.auth().signOut().catch((error) => ({error}))
