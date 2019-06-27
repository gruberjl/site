import moment from 'moment'

const getFollowerCounts = (followerCountDoc, date, dayBefore) => {
  const todayValue = followerCountDoc.followerCounts[date]
  const dayBeforeValue = followerCountDoc.followerCounts[dayBefore]

  if (todayValue && dayBeforeValue)
    return todayValue - dayBeforeValue

  return 0
}

export const getData = (followerCountDoc, engagementsDoc) => {
  const obj = []

  for (let i = 0; i < 30; i++) {
    const date = moment().subtract(i, 'day').format('YYYY-MM-DD')
    const dayBefore = moment().subtract(i+1, 'day').format('YYYY-MM-DD')
    obj.push({
      name: moment(date).format('MMM D'),
      followers: getFollowerCounts(followerCountDoc, date, dayBefore),

    })
  }

  return obj.reverse()
}
