import moment from 'moment'
import shuffleArray from 'array-shuffle'
import clone from 'clone-deep'
import {store} from '../store'

const prefix = 't3_'

export const redditUpvote = async (postId, authorAccountId) => {
  const altAccounts = getAltAccounts(authorAccountId)

  for (let i = 0; i < altAccounts.length; i++) {
    const delayInMinutes = Math.floor(Math.random() * 421) + 1

    const engagement = store.engagements.create('reddit', altAccounts[i].id, 'like', moment().add(delayInMinutes, 'minutes').toISOString())
    engagement.providerId = `${prefix}${postId}`

    await store.engagements.set(engagement)
  }
}

const getAltAccounts = (authorAccountId) => {
  const accountsObj = clone(store.accounts.docs)
  delete accountsObj[authorAccountId]
  const redditAccts = Object.values(accountsObj).filter(acct => Boolean(acct.provider == 'reddit'))
  return shuffleArray(redditAccts)
}
