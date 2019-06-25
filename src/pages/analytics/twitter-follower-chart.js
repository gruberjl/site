import React from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts'
import moment from 'moment'

const getData = (followerCountDoc) => {
  const data = []
  Object.keys(followerCountDoc.followerCounts).forEach(date => {
    data.push({
      name: moment(date).format('MMM D'),
      followers: followerCountDoc.followerCounts[date]
    })
  })

  return data
}

const getYAxisDomain = (followerCountDoc) => {
  const domain = []
  const values = Object.values(followerCountDoc.followerCounts).sort()
  domain.push(values[0]-100)
  domain.push(values[values.length-1]+100)
  return domain
}

const TwitterFollowerChart = ({followerCountDoc}) => {
  return (
    <div>
      <LineChart width={500} height={300} data={getData(followerCountDoc)}>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={getYAxisDomain(followerCountDoc)} />
        <Tooltip />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default TwitterFollowerChart
