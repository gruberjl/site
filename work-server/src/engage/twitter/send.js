import Twit from 'twit'

export const send = async (engagement, account, parentEngagement) => {
  const twit = new Twit({
    consumer_key: account.apiToken,
    consumer_secret: account.apiSecret,
    access_token: account.accessToken,
    access_token_secret: account.accessSecret
  })

  if (engagement.action == 'post')
    return await post(twit, engagement)

  if (engagement.action == 'like')
    return await like(twit, engagement, parentEngagement)

  if (engagement.action == 'share')
    return await share(twit, engagement, parentEngagement)
}

const post = (twit, engagement) => new Promise((res) => {
  twit.post('statuses/update', {status:engagement.message}, (error, data) => {
    if (error) return res({error})

    return res({providerId: data.id_str})
  })
})

const like = (twit, engagement, parentEngagement) => new Promise((res) => {
  twit.post('favorites/create', {id:parentEngagement.providerId}, (error, data) => {
    if (error) return res({error})

    return res({providerId: data.id_str})
  })
})

const share = (twit, engagement, parentEngagement) => new Promise((res) => {
  twit.post(`statuses/retweet/${parentEngagement.providerId}`, (error, data) => {
    if (error) return res({error})

    return res({providerId: data.id_str})
  })
})
