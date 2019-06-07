import {actions} from '../actions'
import {firestore} from 'lib'

export const formLoginSubmit = store => next => action => {
  if (action.type == actions.formLoginSubmit) {
    const {email, password} = store.getState().formLogin.data

    firestore.signin(email, password).then(results => {
      if (results.error) {
        store.dispatch({
          type: actions.formLoginSubmitError,
          error: results.error
        })
      }
    })
  }

  return next(action)
}
