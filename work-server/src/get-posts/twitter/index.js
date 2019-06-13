import {store} from 'lib'
import {getTimeline} from './get-timeline'
import {savePost} from './save-post'

export const getTwitterPosts = async (stream, account) => {
  let post = store.posts.docs[stream.id]
  if (!post) {
    post = store.posts.create(stream)
    await store.posts.set(post)
  }

  let messages = []
  if (stream.type == store.streams.types.twitter.timeline) {
    messages = await getTimeline(stream, account, post)
  }

  await savePost(post, messages)
}
