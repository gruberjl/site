import React from 'react'
import StreamHeader from './stream-header'
import StreamBody from './stream-body'

export const StreamContainer = ({stream, accounts, channels}) => (
  <div className="stream-container columns">
    <div className="column">
      <StreamHeader doc={stream} accounts={accounts} channels={channels} />
      <StreamBody stream={stream} />
    </div>
  </div>
)
