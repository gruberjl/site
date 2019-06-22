import {applyMiddleware} from 'redux'
import {dbMiddleware} from './db/middleware'
import {authMiddleware} from './auth/middleware'

export const middleware = applyMiddleware(
  ...dbMiddleware,
  ...authMiddleware
)
