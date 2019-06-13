import {store} from 'lib'
import clone from 'clone-deep'
import moment from 'moment'

export const savePost = async (post, messages) => {
  if (messages.length == 0)
    return post

  const newPost = clone(post)
  const msgs = messages.map(m => ({
    id: m.id_str,
    text: m.full_text || '',
    inReplyToId: m.in_reply_to_status_id_str || '',
    inReplyToUserId: m.in_reply_to_user_id_str || '',
    user: {
      id: m.user.id_str,
      username: m.user.screen_name || '',
      name: m.user.name || '',
      description: m.user.description || '',
      followCount: m.user.followers_count || 0,
      image: m.user.profile_image_url_https || '',
      following: m.user.following || 0,
      followRequestSent: m.user.follow_request_sent || false
    },
    created: moment(m.created_at).toISOString()
  }))
  console.log(messages[0])
  newPost.messages = [].concat(post.messages, msgs)
  newPost.since_id = messages[0].id_str

  await store.posts.set(newPost)
  return newPost
}
