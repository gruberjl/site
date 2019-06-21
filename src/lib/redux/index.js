import {store} from './store'
import {emit} from './emit'
import './auth/watchers/on-auth-change'

export const redux = {store, emit}
