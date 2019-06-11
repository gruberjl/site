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

export const AccountContainer = ({doc}) => (
  <div className="account-container">
    <AccountHeader doc={doc} />
    <AccountDetails doc={doc}/>
  </div>
)
