import {store} from 'lib'
// import {engageTwitter} from './twitter'
import {engageReddit} from './reddit'

export const engage = async () => {
  const docs = Object.values(store.engagements.docs)
  const sortedByTime = sortByTime(docs)
  // await engageTwitter(filterByProvider(sortedByTime, 'twitter'))
  await engageReddit(filterByProvider(sortedByTime, 'reddit'))
}

const sortByTime = (docs) => {
  return docs.sort((a, b) => {
    if (a.performAt < b.performAt)
      return -1

    return 1
  })
}

const filterByProvider = (docs, provider) => docs.filter(doc => doc.provider == provider)
