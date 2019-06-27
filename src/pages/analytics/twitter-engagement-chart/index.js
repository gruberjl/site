import React from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts'
import moment from 'moment'
import {getData} from './get-data'

const getData2 = (followerCountDoc) => {
  const data = []
  const dates = Object.keys(followerCountDoc.followerCounts)
  for (let i = 0; i < dates.length; i++) {
    let followers = 0
    if (i>0) {
      followers = followerCountDoc.followerCounts[dates[i]] - followerCountDoc.followerCounts[dates[i-1]]
    }

    data.push({
      name: moment(dates[i]).format('MMM D'),
      followers
    })
  }

  return data
}

const TwitterFollowerChart = ({followerCountDoc, engagementsDoc}) => {
  getData(followerCountDoc, engagementsDoc)
  return (
    <div>
      <LineChart width={1000} height={500} data={getData(followerCountDoc)}>
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default TwitterFollowerChart
