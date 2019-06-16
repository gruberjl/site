import snoowrap from 'snoowrap'
import sleep from 'await-sleep'

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

  if (engagement.action == 'markAsRead')
    return await markAsRead(r, engagement)
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

const like = async (r, engagement, parentEngagement) => {
  const id = parentEngagement ? parentEngagement.providerId : engagement.providerId
  return r.getSubmission(id).upvote().then(response => {
    return {providerId: response.name}
  }).catch(({error}) => {
    return {error}
  })
}

const markAsRead = async (r, engagement) => {
  return r.getMessage(engagement.providerId).markAsRead().then(response => {
    return {providerId: response.name}
  }).catch((e) => {
    console.log(e)
    return {error: e.error}
  })
}
