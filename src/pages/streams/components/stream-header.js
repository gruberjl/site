import React from 'react'
import {docEdit} from 'components'

const StreamHeader = ({accountId, name, channelId, accounts, channels, onChange, save}) => (
  <div>
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input value={name} className="input" type="text" placeholder="Stream Name" name="name" onChange={onChange} onBlur={save} />
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
              <select name="accountId" onChange={onChange} value={accountId} onBlur={save}>
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
              <select name="channelId" onChange={onChange} value={channelId} onBlur={save}>
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

export default docEdit(StreamHeader, 'streams', ['name', 'accountId', 'channelId'])
