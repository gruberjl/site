import moment from 'moment'
import shuffleArray from 'array-shuffle'
import clone from 'clone-deep'
import {store} from '../store'

const primaryAccountId = 'Z17TIhTNt'

export const redditBlast = async (url, message, title, subreddit, postType) => {
  const post = await createOriginalPost(url, message, title, subreddit, postType)
  await createRandomEngagements(post)
}

const createOriginalPost = async (url, message, title, subreddit, postType) => {
  const primaryAccount = store.accounts.docs[primaryAccountId]
  const post = store.engagements.create('reddit', primaryAccount.id, 'post', moment().toISOString())

  post.title = title
  post.url = url
  post.subreddit = subreddit
  post.postType = postType
  post.message = message

  await store.engagements.set(post)
  return post
}

const getAltAccounts = () => {
  const accountsObj = clone(store.accounts.docs)
  delete accountsObj[primaryAccountId]
  const redditAccts = Object.values(accountsObj).filter(acct => Boolean(acct.provider == 'reddit'))
  return shuffleArray(redditAccts)
}

const createRandomEngagements = async (post) => {
  const altAccounts = getAltAccounts()

  for (let i = 0; i < altAccounts.length; i++) {
    const delayInMinutes = Math.floor(Math.random() * 31) + 1

    const engagement = store.engagements.create('reddit', altAccounts[i].id, 'like', moment().add(delayInMinutes, 'minutes').toISOString())
    engagement.engageWith = post.id

    await store.engagements.set(engagement)
  }
}
