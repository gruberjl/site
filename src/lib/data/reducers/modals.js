import clone from 'clone-deep'
import {actions} from '../actions'

export const modals = (state = {loginIsOpen: false}, action) => {
  let newState = state

  if (action.type == actions.toggleLoginModal) {
    newState = clone(state)
    newState.loginIsOpen = !newState.loginIsOpen
  }

  if (action.type == actions.authChange) {
    if (state.loginIsOpen && action.user) {
      newState = clone(state)
      newState.loginIsOpen = false
    }
  }

  if (action.type == actions.toggleSignupModal) {
    newState = clone(state)
    newState.signupIsOpen = !newState.signupIsOpen
  }

  return newState
}
