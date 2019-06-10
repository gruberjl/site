import React from 'react'
import {PageHeader} from 'components'
import {store} from 'lib'
import {AccountContainer} from './components'

const {accounts} = store

export class Accounts extends React.Component {
  constructor() {
    super()

    this.state = {
      docs: accounts.docs
    }
  }

  componentDidMount() {
    accounts.on(accounts.events.docsUpdated, this.onDocsUpdated)
  }

  componentWillUnmount() {
    accounts.removeListener(accounts.events.docsUpdated, this.onDocsUpdated)
  }

  onDocsUpdated = (docs) => {
    this.setState({docs})
  }

  createAccount = () => {
    const acct = accounts.create()
    accounts.set(acct)
  }

  render() {
    const {docs} = this.state

    return (
      <div>
        <PageHeader/>
        <main className="section">
          <div className="container">
            <div className="level">
              <div className="is-full-width">
                { Object.values(docs).map(doc => (
                  <AccountContainer key={doc.id} doc={doc} />
                )) }
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <button type="button" onClick={this.createAccount}>Create Account</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
