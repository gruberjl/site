import React from 'react'
import {docEdit} from 'components'

const types = ['Timeline']

const TwitterStream = ({onChange, type, save}) => (
  <div className="columns">
    <div className="column">
      <div className="field">
        <label className="label">Stream Type</label>
        <div className="control">
          <div className="select">
            <select name="type" onChange={onChange} value={type} onBlur={save}>
              { types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default docEdit(TwitterStream, 'streams', ['type'])
