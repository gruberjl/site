import React from 'react'
import {StreamHeader} from './stream-header'
import {TwitterStream} from './twitter-stream'
import {RedditStream} from './reddit-stream'
import {store} from 'lib'

const StreamBody = ({stream}) => {
  if (!stream.accountId || stream.accountId == '')
    return <div/>

  const account = store.accounts.docs[stream.accountId]

  if (!account)
    return <div/>

  if (account.provider == 'twitter')
    return <TwitterStream stream={stream} />

  if (account.provider == 'reddit')
    return <RedditStream stream={stream} />

  return <div/>
}

export const StreamContainer = ({stream}) => (
  <div className="stream-container columns">
    <div className="column">
      <StreamHeader stream={stream} />
      <StreamBody stream={stream} />
    </div>
  </div>
)
