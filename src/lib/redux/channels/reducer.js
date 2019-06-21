import clone from 'clone-deep'

const defaultState = {
  haveLoaded: false,
  docs: {},
  activePageId: ''
}

export const channels = (oldState=defaultState, action) => {
  let state = oldState

  if (action.type === 'docsHaveChanged' && action.collectionName === 'channels') {
    state = clone(oldState)
    state.docs = action.docs
    state.haveLoaded = true
    if (Object.keys(action.docs).length > 0 && oldState.activePageId == '')
      state.activePageId = Object.keys(action.docs)[0]
  }

  if (action.type === 'hasLoggedOut') {
    state = clone(oldState)
    state.docs = {}
    state.haveLoaded = false
    state.activePageId = ''
  }

  if (action.type === 'setActivePageId' && action.collectionName === 'channels') {
    state = clone(oldState)
    state.activePageId = action.activePageId
  }

  return state
}
