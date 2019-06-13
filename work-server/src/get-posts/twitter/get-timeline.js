import Twit from 'twit'

export const getTimeline = async (stream, account, post) => {
  const twit = new Twit({
    consumer_key: account.apiToken,
    consumer_secret: account.apiSecret,
    access_token: account.accessToken,
    access_token_secret: account.accessSecret
  })

  const options = {
    count:100,
    include_entities: true,
    tweet_mode: 'extended'
  }

  if (post.since_id) options.since_id = post.since_id

  const response = await twit.get('statuses/home_timeline', options)
    .catch(error => ({error}))

  if (response.error) {
    console.error(`error in work-server/src/get-posts/twitter/get-timeline.js for ${post.id}`)
    console.error(response.error)
    return []
  }

  return response.data
}
