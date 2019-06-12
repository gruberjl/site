import React from 'react'
import {store} from 'lib'
import {Twitter} from './twitter'
import {Reddit} from './reddit'
import {AccountHeader} from './account-header'

const {accounts} = store

const AccountDetails = ({doc}) => {
  if (doc.provider == accounts.providers.twitter)
    return <Twitter doc={doc}/>

  if (doc.provider == accounts.providers.reddit)
    return <Reddit doc={doc} />

  return <div/>
}

const AccountIcon = ({doc}) => {
  if (doc.provider == accounts.providers.twitter)
    return <img src="/assets/imgs/twitter-icon.png" width="50" height="50" className="account-icon"/>

  if (doc.provider == accounts.providers.reddit)
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
