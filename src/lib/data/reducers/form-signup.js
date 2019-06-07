import clone from 'clone-deep'
import {actions} from '../actions'

const STATE = {
  data: {
    email: '',
    password: ''
  },
  submitError: ''
}

export const formSignup = (state = STATE, action) => {
  let newState = state

  if (action.type == actions.formSignupChange) {
    newState = clone(state)
    newState.data[action.name] = action.value
  }

  if (action.type == actions.formSignupSubmit) {
    newState = clone(state)
    newState.submitError = ''
  }

  if (action.type == actions.formSignupSubmitError) {
    newState = clone(state)
    newState.submitError = action.error.message
  }

  return newState
}
