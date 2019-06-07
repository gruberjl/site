import { combineReducers } from 'redux'
import {auth} from './auth'
import {modals} from './modals'

export const reducers = combineReducers({
  auth,
  modals
})
