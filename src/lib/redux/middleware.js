import {applyMiddleware} from 'redux'
import {journalsMiddleware} from './journals/middleware'
import {accountsMiddleware} from './accounts/middleware'
import {tasksMiddleware} from './tasks/middleware'
import {questionsMiddleware} from './questions/middleware'
import {streamsMiddleware} from './streams/middleware'
import {channelsMiddleware} from './channels/middleware'
import {middlewares} from './middlewares'
import {authMiddleware} from './auth/middleware'

export const middleware = applyMiddleware(
  ...journalsMiddleware,
  ...accountsMiddleware,
  ...tasksMiddleware,
  ...questionsMiddleware,
  ...streamsMiddleware,
  ...channelsMiddleware,
  ...middlewares,
  ...authMiddleware
)
