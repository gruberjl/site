import {store} from 'lib'
import shuffleArray from 'array-shuffle'
import sleep from 'await-sleep'
import {getSnoowrap} from './get-snoowrap'

export const redditAutoUpvote = async () => {
  const accounts = Object.values(store.accounts.docs).filter(doc => doc.provider == 'reddit')
  const account = shuffleArray(accounts)[0]

  const r = getSnoowrap(account)
  const response = await r.getHot({limit: 25}).catch(error => ({error}))

  if (response.error) {
    console.log(`Error in reddit-auto-upvote for account ${account.id}`)
    console.log(response.error)
    return
  }

  await sleep(Math.floor(Math.random() * 30000) + 15000)
  const posts = shuffleArray(response)

  const numOfUpvotes = Math.floor(Math.random() * 5) + 1
  for (let i = 0; i < numOfUpvotes; i++) {
    r.getSubmission(posts[i].name).upvote()
    await sleep(Math.floor(Math.random() * 20000) + 5000)
  }

}
