import React from 'react'
import Twitter from './twitter'
import Reddit from './reddit'
import AccountHeader from './account-header'

const AccountDetails = ({doc}) => {
  if (doc.provider == 'twitter')
    return <Twitter doc={doc}/>

  if (doc.provider == 'reddit')
    return <Reddit doc={doc} />

  return <div/>
}

const AccountIcon = ({doc}) => {
  if (doc.provider == 'twitter')
    return <img src="/assets/imgs/twitter-icon.png" width="50" height="50" className="account-icon"/>

  if (doc.provider == 'reddit')
    return <img src="/assets/imgs/reddit-icon.png" width="50" height="50" className="account-icon"/>

  return <img src="/assets/imgs/icon-account.png" width="50" height="50" className="account-icon"/>
}

export const AccountContainer = ({doc}) => (
  <div className="account-container columns">
    <div className="column is-narrow">
      <AccountIcon doc={doc} />
    </div>
    <div className="column">
      <AccountHeader doc={doc} />
      <AccountDetails doc={doc}/>
    </div>
  </div>
)
