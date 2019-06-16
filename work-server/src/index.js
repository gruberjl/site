import {setup} from './setup'
import {engage} from './engage'
import {followBack} from './follow-back'
import {redditAutoUpvote} from './reddit-auto-upvote'

const start = async () => {
  await setup()
  engage()
  followBack()
  redditAutoUpvote()
}

start()
setInterval(() => engage(), 300000)
setInterval(() => followBack(), 18000000)
setInterval(redditAutoUpvote, 3600000)

import * as server from './server'
server.start()
