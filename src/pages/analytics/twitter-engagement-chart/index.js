import React from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts'
import {getData} from './get-data'

const TwitterFollowerChart = ({followerCountDoc}) => {
  getData(followerCountDoc)
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
