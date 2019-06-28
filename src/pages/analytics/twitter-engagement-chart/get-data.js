import moment from 'moment'

const getFollowerCounts = (followerCountDoc, date, dayBefore) => {
  const todayValue = followerCountDoc.followerCounts[date]
  const dayBeforeValue = followerCountDoc.followerCounts[dayBefore]

  if (todayValue && dayBeforeValue)
    return todayValue - dayBeforeValue

  return 0
}

const getPosts = (timelineDoc, date) => {
  let count = 0
  Object.values(timelineDoc.tweets).forEach(tweet => {
    if (moment(tweet.createdAt).isSame(date, 'day'))
      count++
  })

  return count
}

const getEngagements = (timelineDoc) => {
  const obj = {}

  Object.values(timelineDoc.tweets).forEach(tweet => {
    Object.keys(tweet.history).forEach(date => {
      let d = obj[date] || 0
      d += tweet.history[date].favoriteCount
      d += tweet.history[date].retweetCount
      obj[date] = d
    })
  })

  return obj
}

const getEngagementChange = (engagements, date, dayBefore) => {
  const todayValue = engagements[date] || 0
  const dayBeforeValue = engagements[dayBefore] || 0

  if (todayValue && dayBeforeValue)
    return todayValue - dayBeforeValue

  return 0
}

export const getData = (followerCountDoc, timelineDoc) => {
  const obj = []
  const engagements = getEngagements(timelineDoc)
  console.log(engagements)

  for (let i = 0; i < 30; i++) {
    const date = moment().subtract(i, 'day').format('YYYY-MM-DD')
    const dayBefore = moment().subtract(i+1, 'day').format('YYYY-MM-DD')
    obj.push({
      name: moment(date).format('MMM D'),
      followers: getFollowerCounts(followerCountDoc, date, dayBefore),
      posts: getPosts(timelineDoc, date),
      engagements: getEngagementChange(engagements, date, dayBefore)
    })
  }

  return obj.reverse()
}
