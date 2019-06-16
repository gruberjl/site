import snoowrap from 'snoowrap'

export const getSnoowrap = (account) => {
  const r = new snoowrap({
    userAgent: 'GitBit',
    clientId: account.apiToken,
    clientSecret: account.apiSecret,
    refreshToken: account.accessToken
  })

  return r
}
