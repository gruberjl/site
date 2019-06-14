export const scrubPost = post => {
  const newPost = {
    id: post.id,
    subject: post.subject,
    text: post.body || '',
    inReplyToId: '',
    inReplyToUserId: '',
    sharedCount: 0,
    favoriteCount: 0,
    favorited: false,
    shared: false,
    created: (new Date(post.created_utc)).toISOString(),
    raw: post
  }

  return newPost
}
