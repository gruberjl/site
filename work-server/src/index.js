import {setup} from './setup'
import {engage} from './engage'
import {followBack} from './follow-back'
import {redditAutoUpvote} from './reddit-auto-upvote'

const start = async () => {
  await setup()
  engage()
  followBack()
  redditAutoUpvote()
  // getR()
}

start()
setInterval(() => engage(), 300000)
setInterval(() => followBack(), 18000000)
setInterval(redditAutoUpvote, 3600000)

// import * as server from './server'
// server.start()
//
// import {getSnoowrap} from './reddit-auto-upvote/get-snoowrap'
// import {store} from 'lib'
// const getR = async () => {
//   const account = store.accounts.docs['N-nbnzDIwQ']
//   const r = getSnoowrap(account)
//   const s = await r.getSubmission('c14vox').subreddit.getNew()
//
//   console.log(await r.getSubmission('c14vox').upvote())
// }
