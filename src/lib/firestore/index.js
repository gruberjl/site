import {firebase} from './firebase'
import {signup} from './signup'
import {signin} from './signin'
import {signout} from './signout'
import './listeners'

export const firestore = {firebase, signup, signin, signout}
