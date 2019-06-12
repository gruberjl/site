import {store} from 'lib'
import shuffleArray from 'array-shuffle'
import sleep from 'await-sleep'
import Twit from 'twit'

export const followBack = async () => {
  const accounts = Object.values(store.accounts.docs).filter(doc => doc.followBack)
  const account = shuffleArray(accounts)[0]

  await sleep(Math.floor(Math.random() * 30000) + 15000)

  const twit = new Twit({
    consumer_key: account.apiToken,
    consumer_secret: account.apiSecret,
    access_token: account.accessToken,
    access_token_secret: account.accessSecret
  })

  const following = await twit.get('friends/ids', {stringify_ids:true, count:5000}).then(r => r.data.ids).catch(error => ({error}))
  if (following.error) {
    console.error(`Error when account ${account.id} tried to get following`)
    console.error(following.error)
    return
  }

  const followers = await twit.get('followers/ids', {stringify_ids:true, count:5000}).then(r => r.data.ids).catch(error => ({error}))
  if (following.error) {
    console.error(`Error when account ${account.id} tried to get followers`)
    console.error(followers.error)
    return
  }

  for (let i = 0; i < followers.length; i++) {
    if (following.includes(followers[i])) {
      await sleep(Math.floor(Math.random() * 3000) + 1500)
      const {error} = await twit.post('friendships/create', {user_id:followers[i], follow:true}).catch(error => ({error}))
      if (error) {
        console.error(`Error when account ${account.id} tried to follow ${followers[i]}`)
        console.error(error)
      }
    }
  }
}
