import { combineReducers } from 'redux'
import {auth} from './auth'
import {formLogin} from './form-login'
import {formSignup} from './form-signup'
import {rootDoc} from './root-doc'

export const reducers = combineReducers({
  auth,
  formLogin,
  formSignup,
  rootDoc
})
