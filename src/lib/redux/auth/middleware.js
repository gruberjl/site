import {firestore} from '../../firestore'

const signout = () => next => action => {
  next(action)

  if (action.type === 'signout') {
    firestore.signout()
  }
}

export const authMiddleware = [signout]
