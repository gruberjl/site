import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

export class StreamHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.doc.name,
      accountId: props.doc.accountId,
      accounts: store.accounts.docsByName()
    }
  }

  componentDidMount() {
    store.accounts.on(store.accounts.events.docsUpdated, this.onAccountsUpdated)
  }

  componentWillUnmount() {
    store.accounts.removeListener(store.accounts.events.docsUpdated, this.onAccountsUpdated)
  }

  onAccountsUpdated = () => {
    this.setState({accounts: store.accounts.docsByName()})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  save = () => {
    const doc = clone(this.props.doc)
    const {name, accountId} = this.state

    doc.name = name
    doc.accountId = accountId

    store.streams.set(doc)
  }

  render() {
    const {accounts, accountId, name} = this.state

    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="field">
            <label className="label">Account</label>
            <div className="control">
              <div className="select">
                <select name="accountId" onChange={this.onChange} value={accountId} onBlur={this.save}>
                  <option value="">Select account</option>
                  { accounts.map(account => (
                    <option key={account.id} value={account.id}>{account.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input value={name} className="input" type="text" placeholder="Stream Name" name="name" onChange={this.onChange} onBlur={this.save} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
