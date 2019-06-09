import {firebase, db} from './firebase'
import {signup} from './signup'
import {signin} from './signin'
import {signout} from './signout'
import {set} from './set'

export const firestore = {firebase, db, signup, signin, signout, set}
