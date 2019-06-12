import React from 'react'
import {StreamHeader} from './stream-header'
import {TwitterStream} from './twitter-stream'

export const StreamContainer = ({doc}) => (
  <div className="stream-container columns">
    <div className="column">
      <StreamHeader doc={doc} />
      <TwitterStream doc={doc} />
    </div>
  </div>
)
