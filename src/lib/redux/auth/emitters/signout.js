import {store} from '../../store'

export const signout = () => {
  store.dispatch({
    type: 'signout'
  })
}
