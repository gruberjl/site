import {getTimeline} from './get-timeline'
import {scrubPost} from './scrub-post'

export const getTwitterPosts = async (stream, account) => {
  let response

  if (stream.type == 'Timeline') {
    response = await getTimeline(stream, account)
  }

  response.posts = response.posts.map(scrubPost)

  return response
}
