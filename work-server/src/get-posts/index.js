import {store} from 'lib'
import {getTwitterPosts} from './twitter'

export const getPosts = async () => {
  const streams = Object.values(store.streams.docs)

  for (let i = 0; i < streams.length; i++) {
    const stream = streams[i]
    const account = store.accounts.docs[stream.accountId]

    if (account.provider == store.accounts.providers.twitter) {
      await getTwitterPosts(stream, account)
    }
  }
}
