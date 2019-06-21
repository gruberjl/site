import * as journals from './journals/emitters'
import * as accounts from './accounts/emitters'
import * as auth from './auth/emitters'
import * as tasks from './tasks/emitters'
import * as questions from './questions/emitters'
import * as streams from './streams/emitters'
import * as channels from './channels/emitters'
import * as emitters from './emitters'

export const emit = {journals, accounts, auth, tasks, questions, streams, channels, ...emitters}
