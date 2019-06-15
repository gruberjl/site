import {getSnoowrap} from './get-snoowrap'

export const getDirectMessages = async (stream, account) => {
  const r = getSnoowrap(account)

  const response = await r.getInbox()
    .catch(error => ({error}))

  if (response.error) {
    console.error(`error in work-server/src/get-posts/reddit/get-direct-messages.js for ${stream.id}`)
    console.error(response.error)
    return {
      posts: [],
      streamId: stream.id
    }
  }

  return {
    posts: response.filter(post => post.new),
    streamId: stream.id
  }
}
