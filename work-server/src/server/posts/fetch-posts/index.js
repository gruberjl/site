import {getTwitterPosts} from './twitter'

export const fetchPostsAll = (streams, accounts) => {
  const accountsObj = toObj(accounts)

  return Promise.all(streams.map(fetchPosts(accountsObj)))
}

const toObj = (accounts) => {
  return accounts.reduce((obj, acct) => {
    obj[acct.id] = acct
    return obj
  }, {})
}

const fetchPosts = (accounts) => async (stream) => {
  const account = accounts[stream.accountId]

  if (!account)
    return {error: 'no account found', streamId: stream.id}

  let response
  if (account.provider == 'twitter') {
    response = await getTwitterPosts(stream, account)
  }

  return response
}
