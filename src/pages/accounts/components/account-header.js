import React from 'react'
import {docEdit} from 'components'

const AccountHeader = ({onChange, provider, save, name}) => (
  <div className="columns">
    <div className="column is-one-fifth">
      <div className="field">
        <label className="label">Platform</label>
        <div className="control">
          <div className="select">
            <select name="provider" onChange={onChange} value={provider} onBlur={save}>
              <option value="">Select provider</option>
              <option value={'reddit'}>reddit</option>
              <option value={'twitter'}>twitter</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input value={name} className="input" type="text" placeholder="Account Name" name="name" onChange={onChange} onBlur={save} />
        </div>
      </div>
    </div>
  </div>
)

export default docEdit(AccountHeader, 'accounts', ['name', 'provider'])
