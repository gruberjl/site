import {firebase, db} from './firebase'
import {signup} from './signup'
import {signin} from './signin'
import {signout} from './signout'
import {set} from './set'
import {watch} from './watch'

export const firestore = {firebase, db, signup, signin, signout, set, watch}
