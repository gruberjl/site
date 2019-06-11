import {isReady} from '../lib/is-ready'
import {store} from 'lib'
import {send} from './send'

export const engageReddit = async (docs) => {
  const engagement = getReadyEngagement(docs)

  if (!engagement)
    return

  const account = store.accounts.docs[engagement.account]
  const parentEngagement = store.engagements.docs[engagement.engageWith]

  const response = await send(engagement, account, parentEngagement)

  if (response.error) {
    console.error(`Error sending to reddit provider; engagement id: ${engagement.id}; account id: ${account.id}`)
    console.log(response.error)
    return
  }

  engagement.providerId = response.providerId
  engagement.completed = true
  await store.engagements.set(engagement)
}

const getReadyEngagement = (docs) => docs.find(doc => {
  if (!isReady(doc)) return false
  if (!doc.engageWith) return true

  const parent = docs.find(d => d.id == doc.engageWith)
  if (parent.completed) return true

  return false
})
