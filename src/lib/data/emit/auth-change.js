import {store} from '../store'
import {actions} from '../actions'

export const authChange = (user) => {
  store.dispatch({
    type: actions.authChange,
    user
  })
}
