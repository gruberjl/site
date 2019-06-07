import {applyMiddleware} from 'redux'
import {formLoginSubmit} from './form-login-submit'
import {formSignupSubmit} from './form-signup-submit'

export const middleware = applyMiddleware(formLoginSubmit, formSignupSubmit)
