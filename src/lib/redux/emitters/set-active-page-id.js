import {store} from '../store'

export const setActivePageId = collectionName => activePageId => {
  store.dispatch({
    type: 'setActivePageId',
    collectionName,
    activePageId
  })
}
