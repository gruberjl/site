import React from 'react'
import {docEdit} from 'components'

const Reddit = ({username, onChange, save, accessToken, apiSecret, apiToken}) => (
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
      <div className="column">
        <div className="field">
          <label className="label">Access Token</label>
          <div className="control">
            <input value={accessToken} className="input" type="text" placeholder="Access Token" name="accessToken" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">API Secret</label>
          <div className="control">
            <input value={apiSecret} className="input" type="text" placeholder="API Secret" name="apiSecret" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">API Token</label>
          <div className="control">
            <input value={apiToken} className="input" type="text" placeholder="Api Token" name="apiToken" onChange={onChange} onBlur={save} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default docEdit(Reddit, 'accounts', ['accessToken', 'apiSecret', 'apiToken', 'username'])
