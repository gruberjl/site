import {docsHaveChanged} from '../emitters'
import {startWatchingDb, stopWatchingDb} from '../watching-db'

export const watchCollections = () => next => action => {
  if (action.type === 'hasLoggedIn') {
    startWatchingDb(action.user.uid, docsHaveChanged)
  }

  if (action.type === 'hasLoggedOut' || action.type === 'signout') {
    stopWatchingDb()
  }

  next(action)
}
