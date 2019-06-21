import clone from 'clone-deep'

const defaultState = {
  isLoggedIn: false,
  user: {},
  isSigninModalOpen: false,
  isSignupModalOpen: false
}

export const auth = (oldState=defaultState, action) => {
  let state = oldState

  if (action.type == 'hasLoggedIn') {
    state = clone(oldState)
    state.isLoggedIn = true
    state.user = action.user
    state.isSigninModalOpen = false
    state.isSignupModalOpen = false
  }

  if (action.type == 'hasLoggedOut') {
    state = clone(oldState)
    state.isLoggedIn = false
    state.user = {}
  }

  if (action.type == 'toggleAuthModal' && action.modalName == 'signin') {
    state = clone(oldState)
    if (action.shouldOpenModal === undefined)
      state.isSigninModalOpen = !oldState.isSigninModalOpen
    else
      state.isSigninModalOpen = action.shouldOpenModal
  }

  if (action.type == 'toggleAuthModal' && action.modalName == 'signup') {
    state = clone(oldState)
    if (action.shouldOpenModal === undefined)
      state.isSignupModalOpen = !oldState.isSignupModalOpen
    else
      state.isSignupModalOpen = action.shouldOpenModal
  }

  return state
}
