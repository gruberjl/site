import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

const {accounts} = store

export class Reddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: props.doc.accessToken || '',
      apiSecret: props.doc.apiSecret || '',
      apiToken: props.doc.apiToken || '',
      username: props.doc.username || '',
      randomEngageSearch: props.doc.randomEngageSearch || ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  save = () => {
    const doc = clone(this.props.doc)
    const {accessToken, apiSecret, apiToken, username, randomEngageSearch} = this.state

    doc.accessToken = accessToken
    doc.apiSecret = apiSecret
    doc.apiToken = apiToken
    doc.username = username
    doc.randomEngageSearch = randomEngageSearch

    accounts.set(doc)
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Platform Username</label>
              <div className="control">
                <input value={this.state.username} className="input" type="text" placeholder="Username" name="username" onChange={this.onChange} onBlur={this.save} />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Access Token</label>
              <div className="control">
                <input value={this.state.accessToken} className="input" type="text" placeholder="Access Token" name="accessToken" onChange={this.onChange} onBlur={this.save} />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">API Secret</label>
              <div className="control">
                <input value={this.state.apiSecret} className="input" type="text" placeholder="API Secret" name="apiSecret" onChange={this.onChange} onBlur={this.save} />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">API Token</label>
              <div className="control">
                <input value={this.state.apiToken} className="input" type="text" placeholder="Api Token" name="apiToken" onChange={this.onChange} onBlur={this.save} />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Random Engage</label>
              <div className="control">
                <input
                  value={this.state.randomEngageSearch}
                  className="input"
                  type="text"
                  placeholder="subreddit to randomly engage with"
                  name="randomEngageSearch"
                  onChange={this.onChange}
                  onBlur={this.save}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
