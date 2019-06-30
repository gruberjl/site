import React from 'react'
import {ComposedChart, Bar, Line, XAxis, YAxis, Tooltip} from 'recharts'
import {getData} from './get-data'

const TwitterFollowerChart = ({followerCountDoc, timelineDoc}) => {
  return (
    <div>
      <h2 className="title is-2">Engagement</h2>
      <ComposedChart width={1000} height={500} data={getData(followerCountDoc, timelineDoc)}>
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
        <Line type="monotone" dataKey="engagements" stroke="#8884d8" />
        <Bar dataKey="posts" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  )
}

export default TwitterFollowerChart
