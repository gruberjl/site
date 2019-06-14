import {firestore, admin} from './firestore'
import {streams} from './streams'
import {accounts} from './accounts'

export const db = {streams, firestore, admin, accounts}
