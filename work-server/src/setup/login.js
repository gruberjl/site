/* global process */
import {firestore} from 'lib'

export const login = async () => {
  const username = process.env.FIRESTORE_USERNAME
  const password = process.env.FIRESTORE_PASSWORD
  const r = await firestore.signin(username, password)

  if (r.error) {
    console.error("unable to login. Verify credentials are set in environment variables.")
    return false
  }

  return true
}
