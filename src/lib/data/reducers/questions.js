import clone from 'clone-deep'
import {actions} from '../actions'

const STATE = {
  docs: {},
  isLoaded: false
}

export const questions = (state = STATE, action) => {
  let newState = state

  if (action.type == actions.questionsUpdated) {
    newState = clone(state)
    newState.docs = action.docs
    newState.isLoaded = true
  }

  if (action.type == actions.authChange && !action.user) {
    newState = clone(state)
    newState.docs = {}
  }

  if (action.type == actions.signout) {
    newState = clone(state)
    newState.docs = {}
  }

  return newState
}
