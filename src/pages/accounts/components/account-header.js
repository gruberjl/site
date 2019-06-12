import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

const {accounts} = store

export class AccountHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.doc.name,
      provider: props.doc.provider
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  save = () => {
    const doc = clone(this.props.doc)
    const {name, provider} = this.state

    doc.name = name
    doc.provider = provider

    accounts.set(doc)
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <div className="field">
            <label className="label">Platform</label>
            <div className="control">
              <div className="select">
                <select name="provider" onChange={this.onChange} value={this.state.provider} onBlur={this.save}>
                  <option value="">Select provider</option>
                  { Object.values(accounts.providers).map(p => (
                    <option key={p} value={p}>{p}</option>
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
              <input value={this.state.name} className="input" type="text" placeholder="Account Name" name="name" onChange={this.onChange} onBlur={this.save} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
