import React from 'react'
import {docEdit} from 'components'

const Twitter = ({onChange, save, username, accessToken, accessSecret, apiToken, apiSecret, followBack}) => (
  <div>
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Platform Username</label>
          <div className="control">
            <input value={username} className="input" type="text" placeholder="Username" name="username" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Access Token</label>
          <div className="control">
            <input value={accessToken} className="input" type="text" placeholder="Access Token" name="accessToken" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Access Secret</label>
          <div className="control">
            <input value={accessSecret} className="input" type="text" placeholder="Access Secret" name="accessSecret" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Api Token</label>
          <div className="control">
            <input value={apiToken} className="input" type="text" placeholder="Api Token" name="apiToken" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Api Secret</label>
          <div className="control">
            <input value={apiSecret} className="input" type="text" placeholder="API Secret" name="apiSecret" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column is-narrow">
        <label className="checkbox">
          <input type="checkbox" onChange={onChange} name="followBack" checked={followBack} onBlur={save} /> Follow back
        </label>
      </div>
    </div>
  </div>
)

export default docEdit(Twitter, 'accounts', ['followBack', 'apiSecret', 'apiToken', 'accessSecret', 'accessToken', 'username'])
