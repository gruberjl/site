import {combineReducers} from 'redux'
import {auth} from './auth/reducer'
import {journals} from './journals/reducer'
import {accounts} from './accounts/reducer'
import {tasks} from './tasks/reducer'
import {questions} from './questions/reducer'
import {streams} from './streams/reducer'
import {channels} from './channels/reducer'
import {engagements} from './engagements/reducer'

export const reducers = combineReducers({
  auth,
  journals,
  accounts,
  tasks,
  questions,
  streams,
  channels,
  engagements
})
