import {actions} from '../actions'
import {firestore} from 'lib'

export const formSignupSubmit = store => next => action => {
  if (action.type == actions.formSignupSubmit) {
    const {email, password} = store.getState().formSignup.data

    firestore.signup(email, password).then(results => {
      if (results.error) {
        store.dispatch({
          type: actions.formSignupSubmitError,
          error: results.error
        })
      }
    })
  }

  return next(action)
}
