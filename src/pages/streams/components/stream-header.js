import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

export class StreamHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.stream.name,
      accountId: props.stream.accountId,
      channelId: props.stream.channelId
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  save = () => {
    const stream = clone(this.props.stream)
    const {name, accountId, channelId} = this.state

    stream.name = name
    stream.accountId = accountId
    stream.channelId = channelId

    store.streams.set(stream)
  }

  render() {
    const {accountId, name, channelId} = this.state
    const {accounts, channels} = this.props

    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input value={name} className="input" type="text" placeholder="Stream Name" name="name" onChange={this.onChange} onBlur={this.save} />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
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
              <label className="label">Channel</label>
              <div className="control">
                <div className="select">
                  <select name="channelId" onChange={this.onChange} value={channelId} onBlur={this.save}>
                    <option value="">Select channel</option>
                    { channels.map(channel => (
                      <option key={channel.id} value={channel.id}>{channel.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
