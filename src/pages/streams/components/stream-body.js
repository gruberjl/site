import React from 'react'
import {connect} from 'react-redux'
import TwitterStream from './twitter-stream'
import RedditStream from './reddit-stream'

const StreamBody = ({stream, account}) => {
  if (!account)
    return <div/>

  if (account.provider == 'twitter')
    return <TwitterStream doc={stream} />

  if (account.provider == 'reddit')
    return <RedditStream doc={stream} />

  return <div/>
}

const mapStateToProps = (state, props) => {
  if (!props.stream || !props.stream.accountId || props.stream.accountId == '')
    return {account: undefined}

  return {
    account: state.accounts.docs[props.stream.accountId]
  }
}

export default connect(mapStateToProps)(StreamBody)
