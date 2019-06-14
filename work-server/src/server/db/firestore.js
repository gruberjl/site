/* global __dirname */
import {join} from 'path'
import Admin from 'firebase-admin'

Admin.initializeApp({
  credential: Admin.credential.cert(join(__dirname, '..', '..', '..', '..', 'secret.json'))
})

export const admin = Admin
export const firestore = Admin.firestore()
