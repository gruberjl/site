import React from 'react'
import {StreamHeader} from './stream-header'

export const StreamContainer = ({doc}) => (
  <div className="stream-container columns">
    <div className="column">
      <StreamHeader doc={doc} />
    </div>
  </div>
)
