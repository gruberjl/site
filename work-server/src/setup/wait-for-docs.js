import {store} from 'lib'

export const waitForDocs = async () => {
  await waitForEngagements()
  await waitForAccounts()
}

const waitForEngagements = () => new Promise(res => {
  if (store.engagements.isLoaded)
    return res(true)

  store.engagements.once(store.engagements.events.docsUpdated, () => res(true))
})

const waitForAccounts = () => new Promise(res => {
  if (store.accounts.isLoaded)
    return res(true)

  store.engagements.once(store.accounts.events.docsUpdated, () => res(true))
})
