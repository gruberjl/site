import clone from 'clone-deep'

const defaultState = {
  haveLoaded: false,
  docs: {}
}

export const engagements = (oldState=defaultState, action) => {
  let state = oldState

  if (action.type === 'docsHaveChanged' && action.collectionName === 'engagements') {
    state = clone(oldState)
    state.docs = action.docs
    state.haveLoaded = true
  }

  if (action.type === 'hasLoggedOut') {
    state = clone(oldState)
    state.docs = {}
    state.haveLoaded = false
  }

  return state
}
