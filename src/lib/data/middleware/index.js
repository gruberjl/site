import {applyMiddleware} from 'redux'
import {formLoginSubmit} from './form-login-submit'
import {formSignupSubmit} from './form-signup-submit'
import {firestoreWatchRootDoc} from './firestore-watch-root-doc'
import {questionsWatch} from './questions-watch'
import {signout} from './signout'

export const middleware = applyMiddleware(
  formLoginSubmit,
  formSignupSubmit,
  firestoreWatchRootDoc,
  signout,
  questionsWatch
)
