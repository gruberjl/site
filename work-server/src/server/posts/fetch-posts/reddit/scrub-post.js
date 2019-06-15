import moment from 'moment'

export const scrubPost = post => {
  const newPost = {
    id: post.name,
    subject: post.subject,
    text: post.body || '',
    inReplyToId: '',
    inReplyToUserId: '',
    sharedCount: 0,
    favoriteCount: 0,
    favorited: false,
    shared: false,
    created: moment.unix(post.created_utc).toISOString(),
    isRead: !post.new
  }

  return newPost
}
