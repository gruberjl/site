import clone from 'clone-deep'
import {actions} from '../actions'

const STATE = {
  doc: {}
}

export const rootDoc = (state = STATE, action) => {
  let newState = state

  if (action.type == actions.setRootDoc) {
    newState = clone(state)
    newState.doc = action.doc
  }

  if (action.type == actions.authChange && !action.user) {
    newState = clone(state)
    newState.doc = {}
  }

  if (action.type == actions.signout) {
    newState = clone(state)
    newState.doc = {}
  }

  return newState
}
