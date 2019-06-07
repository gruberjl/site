import {applyMiddleware} from 'redux'
import {formLoginSubmit} from './form-login-submit'

export const middleware = applyMiddleware(formLoginSubmit)
