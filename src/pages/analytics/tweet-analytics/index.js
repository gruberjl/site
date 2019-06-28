import React from 'react'
import {TweetAnalytic} from './tweet-analytic'

export const TweetAnalytics = ({timelineDoc}) => (

  <div>
    { Object.values(timelineDoc.tweets).map(tweet => (
      <div className="columns"  key={tweet.id}>
        <div className="column is-three-fifths is-offset-one-fifth">
          <TweetAnalytic tweet={tweet}/>
        </div>
      </div>
    )) }
  </div>

)
