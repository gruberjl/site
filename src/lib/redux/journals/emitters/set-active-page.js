import {store} from '../../store'

export const setActivePage = (activePageId) => {
  store.dispatch({
    type: 'setActiveJournalPage',
    activePageId: activePageId
  })
}
