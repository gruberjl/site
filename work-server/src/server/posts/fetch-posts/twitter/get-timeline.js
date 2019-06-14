import {getTwit} from './get-twit'

let response

export const getTimeline = async (stream, account) => {
  const twit = getTwit(account)

  const options = {
    count:5,
    include_entities: true,
    tweet_mode: 'extended'
  }

  if (!response)
    response = await twit.get('statuses/home_timeline', options)
      .catch(error => ({error}))

  if (response.error) {
    console.error(`error in work-server/src/get-posts/twitter/get-timeline.js for ${stream.id}`)
    console.error(response.error)
    return {
      posts: [],
      streamId: stream.id
    }
  }
  console.log(response.data[0].entities)
  return {
    posts: response.data,
    streamId: stream.id
  }
}
