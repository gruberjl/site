import {actions} from '../actions'
import {firestore} from 'lib'

export const signout = () => next => action => {
  if (action.type == actions.signout) {
    setTimeout(() => firestore.signout(), 1)
  }

  return next(action)
}
