import React from 'react'

export const TweetAnalytic = ({tweet}) => (
  <div className="card">
    <div className="card-content">
      <p className="">{tweet.text}</p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">retweets {tweet.retweetCount}</p>
      <p className="card-footer-item">likes {tweet.favoriteCount}</p>
    </footer>
  </div>
)
