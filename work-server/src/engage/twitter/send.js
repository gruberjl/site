import Twit from 'twit'

export const send = async (engagement, account) => {
  const twit = new Twit({
    consumer_key: account.apiToken,
    consumer_secret: account.apiSecret,
    access_token: account.accessToken,
    access_token_secret: account.accessSecret
  })

  if (engagement.action == 'post')
    return await post(twit, engagement)
}

const post = (twit, engagement) => new Promise((res) => {
  twit.post('statuses/update', {status:engagement.message}, (error, data) => {
    if (error) return res({error})

    return res({providerId: data.id_str})
  })
})
