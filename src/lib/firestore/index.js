import {firebase} from './firebase'
import {signup} from './signup'
import {signin} from './signin'
import './listeners'

export const firestore = {firebase, signup, signin}
