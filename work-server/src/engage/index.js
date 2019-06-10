import {store} from 'lib'
import {engageTwitter} from './twitter'

export const engage = async () => {
  const docs = Object.values(store.engagements.docs)
  const sortedByTime = sortByTime(docs)
  await engageTwitter(sortedByTime)
}

const sortByTime = (docs) => {
  return docs.sort((a, b) => {
    if (a.performAt < b.performAt)
      return -1

    return 1
  })
}
