import clone from 'clone-deep'
import {actions} from '../actions'

const STATE = {
  data: {
    email: '',
    password: ''
  },
  submitError: '',
  modalOpen: false
}

export const formSignup = (state = STATE, action) => {
  let newState = state

  if (action.type == actions.toggleSignupModal) {
    newState = clone(state)
    newState.modalOpen = !newState.modalOpen
  }

  if (action.type == actions.authChange && action.user) {
    newState = clone(state)
    newState.modalOpen = false
  }

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
