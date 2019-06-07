import { combineReducers } from 'redux'
import {auth} from './auth'
import {modals} from './modals'
import {formLogin} from './form-login'

export const reducers = combineReducers({
  auth,
  modals,
  formLogin
})
