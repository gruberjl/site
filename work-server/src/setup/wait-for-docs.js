import {store} from 'lib'

export const waitForDocs = async () => {
  await waitForEngagements()
  await waitForAccounts()
  await waitForPosts()
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

const waitForPosts = () => new Promise(res => {
  if (store.posts.isLoaded)
    return res(true)

  store.engagements.once(store.posts.events.docsUpdated, () => res(true))
})
