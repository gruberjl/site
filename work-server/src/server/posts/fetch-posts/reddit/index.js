import {getDirectMessages} from './get-direct-messages'
import {scrubPost} from './scrub-post'

export const getRedditPosts = async (stream, account) => {
  let response = {posts:[], streamId:stream.id}

  if (stream.type == 'Direct Messages') {
    response = await getDirectMessages(stream, account)
  }

  response.posts = response.posts.map(scrubPost)

  return response
}
