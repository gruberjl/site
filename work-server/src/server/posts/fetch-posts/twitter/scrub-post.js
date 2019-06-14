export const scrubPost = post => {
  const newPost = {
    id: post.id_str,
    text: post.full_text || '',
    inReplyToId: post.in_reply_to_status_id_str || '',
    inReplyToUserId: post.in_reply_to_user_id_str || '',
    sharedCount: post.retweet_count,
    favoriteCount: post.favorite_count,
    favorited: post.favorited,
    shared: post.retweeted,
    created: (new Date(post.created_at)).toISOString(),
    user: {
      id: post.user.id_str,
      username: post.user.screen_name || '',
      name: post.user.name || '',
      description: post.user.description || '',
      followCount: post.user.followers_count || 0,
      image: post.user.profile_image_url_https || '',
      following: post.user.following || 0,
      followRequestSent: post.user.follow_request_sent || false
    }
  }

  if (post.retweeted_status)
    newPost.sharedPost = scrubPost(post.retweeted_status)

  return newPost
}
