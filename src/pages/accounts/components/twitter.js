import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

const {accounts} = store

export class Twitter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accessSecret: props.doc.accessSecret || '',
      accessToken: props.doc.accessToken || '',
      apiSecret: props.doc.apiSecret || '',
      apiToken: props.doc.apiToken || '',
      username: props.doc.username || ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  save = () => {
    const doc = clone(this.props.doc)
    const {accessSecret, accessToken, apiSecret, apiToken, username} = this.state

    doc.accessSecret = accessSecret
    doc.accessToken = accessToken
    doc.apiSecret = apiSecret
    doc.apiToken = apiToken
    doc.username = username

    accounts.set(doc)
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="control">
            <input value={this.state.username} className="input" type="text" placeholder="Username" name="username" onChange={this.onChange} onBlur={this.save} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input value={this.state.accessSecret} className="input" type="text" placeholder="Access Secret" name="accessSecret" onChange={this.onChange} onBlur={this.save} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input value={this.state.accessToken} className="input" type="text" placeholder="Access Token" name="accessToken" onChange={this.onChange} onBlur={this.save} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input value={this.state.apiSecret} className="input" type="text" placeholder="API Secret" name="apiSecret" onChange={this.onChange} onBlur={this.save} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input value={this.state.apiToken} className="input" type="text" placeholder="Api Token" name="apiToken" onChange={this.onChange} onBlur={this.save} />
          </div>
        </div>
      </div>
    )
  }
}
