import { combineReducers } from 'redux'
import {auth} from './auth'
import {modals} from './modals'
import {formLogin} from './form-login'
import {formSignup} from './form-signup'

export const reducers = combineReducers({
  auth,
  modals,
  formLogin,
  formSignup
})
