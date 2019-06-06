import clone from 'clone-deep'
import {actions} from '../actions'

export const auth = (state = {isLoggedIn:false, user:{}}, action) => {
  let newState = state

  if (action == actions.authChange) {
    newState = clone(state)
    newState.user = action.user
    newState.isLoogedIn = Boolean(action.user)
  }

  return newState
}
