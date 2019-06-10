import moment from 'moment'
import shuffleArray from 'array-shuffle'
import clone from 'clone-deep'
import {store} from '../store'

const primaryAccountId = '9ImNqFlC9JXwMXSCDZTf'

export const tweetBlast = async (url, message) => {
  const tweet = await createOriginalPost(url, message)
  await createRandomEngagements(tweet)
}

const createOriginalPost = async (url, message) => {
  const primaryAccount = store.accounts.docs[primaryAccountId]
  const tweet = store.engagements.create('twitter', primaryAccount.id, 'post', moment().toISOString())
  tweet.message = `${message}\n${url}`
  await store.engagements.set(tweet)
  return tweet
}

const getAltAccounts = () => {
  const accountsObj = clone(store.accounts.docs)
  delete accountsObj[primaryAccountId]

  return shuffleArray(Object.values(accountsObj))
}

const createRandomEngagements = async (tweet) => {
  const altAccounts = getAltAccounts()
  const actions = ['like', 'share']

  for (let i = 0; i < altAccounts.length; i++) {
    const action = actions[Math.floor(Math.random() * 1) + 0]
    const delayInMinutes = Math.floor(Math.random() * 30) + 1

    const engagement = store.engagements.create('twitter', altAccounts[i].id, action, moment().add(delayInMinutes, 'minutes').toISOString())
    engagement.engageWith = tweet.id

    await store.engagements.set(engagement)
  }
}
