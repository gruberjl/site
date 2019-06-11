import snoowrap from 'snoowrap'

export const send = async (engagement, account, parentEngagement) => {
  const r = new snoowrap({
    userAgent: 'GitBit',
    clientId: account.apiToken,
    clientSecret: account.apiSecret,
    refreshToken: account.accessToken
  })

  if (engagement.action == 'post')
    return await post(r, engagement)

  if (engagement.action == 'like')
    return await like(r, engagement, parentEngagement)
}

const post = (r, engagement) => {
  return r.getSubreddit(engagement.subreddit).submitLink({
    title: engagement.title,
    url: engagement.url
  }).then(response => ({
    providerId: response.name
  })).catch(({error}) => ({
    error
  }))
}

const like = (r, engagement, parentEngagement) => {
  return r.getSubmission(parentEngagement.providerId).upvote().then(response => {
    return {providerId: response.name}
  }).catch(({error}) => {
    return {error}
  })
}
