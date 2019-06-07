import clone from 'clone-deep'
import {actions} from '../actions'

const STATE = {
  data: {
    email: '',
    password: ''
  },
  submitError: ''
}

export const formLogin = (state = STATE, action) => {
  let newState = state

  if (action.type == actions.formLoginChange) {
    newState = clone(state)
    newState.data[action.name] = action.value
  }

  if (action.type == actions.formLoginSubmit) {
    newState = clone(state)
    newState.submitError = ''
  }

  if (action.type == actions.formLoginSubmitError) {
    newState = clone(state)
    newState.submitError = action.error.message
  }

  return newState
}
