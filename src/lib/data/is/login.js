import {actions} from '../actions'

export const isLogin = (action) =>
  action.type == actions.authChange && action.user && action.user.uid
