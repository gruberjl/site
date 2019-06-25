import React from 'react'
import {connect} from 'react-redux'
import {PageHeader} from 'components'
import Content from './content'

const Analytics = ({accounts, activeAccount}) => (
  <div>
    <PageHeader/>
    <div className="tabs">
      <ul>
        { accounts.map(account => (
          <li key={account.id} className={activeAccount && activeAccount.id == account.id ? "is-active" : ''} ><a>Twitter Gruberjl</a></li>
        )) }
      </ul>
    </div>
    { activeAccount
      ? <Content account={activeAccount} />
      : <div/>
    }
  </div>
)

const mapStateToProps = state => {
  return {
    accounts: Object.values(state.accounts.docs),
    activeAccount: Object.values(state.accounts.docs)[0]
  }
}

export default connect(mapStateToProps)(Analytics)
