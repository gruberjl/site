import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

export class TwitterStream extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.doc.type || store.streams.types.twitter.timeline
    }
  }

  onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({[e.target.name]: value})
  }

  save = () => {
    const doc = clone(this.props.doc)
    const {type} = this.state

    doc.type = type

    store.streams.set(doc)
  }

  render() {
    const types = Object.values(store.streams.types.twitter)
    return (
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Stream Type</label>
            <div className="control">
              <div className="select">
                <select name="type" onChange={this.onChange} value={this.state.type} onBlur={this.save}>
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
  }
}
