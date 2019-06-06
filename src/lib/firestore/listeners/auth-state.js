import {firebase} from '../firebase'
import {data} from '../../data'

data.emit.authChange(firebase.auth().currentUser)
firebase.auth().onAuthStateChanged(data.emit.authChange)
