import Twit from 'twit'

export const getTwit = (account) => {
  const twit = new Twit({
    consumer_key: account.apiToken,
    consumer_secret: account.apiSecret,
    access_token: account.accessToken,
    access_token_secret: account.accessSecret
  })

  return twit
}
