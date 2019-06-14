import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

export class RedditStream extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.stream.type || store.streams.types.reddit.direct
    }
  }

  onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({[e.target.name]: value})
  }

  save = () => {
    const stream = clone(this.props.stream)
    const {type} = this.state

    stream.type = type

    store.streams.set(stream)
  }

  render() {
    const types = Object.values(store.streams.types.reddit)
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
