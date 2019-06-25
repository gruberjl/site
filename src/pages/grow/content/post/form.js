import React from 'react'
import {docEdit, DateTime} from 'components'

class Form extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div>
          <div className="field">
            <div className="control">
              <textarea
                name="message"
                onChange={this.props.onChange}
                value={this.props.message}
                className="textarea"
                placeholder="Send a message to help your audience"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="field column is-narrow">
            <div className="control">
              <DateTime name="postAt" value={this.props.postAt} onChange={this.props.onChange} />
            </div>
          </div>
          <div className="field column is-narrow">
            <div className="control">
              <button type="button" className="button" onClick={this.props.save}>Post</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default docEdit(Form, 'engagements', ['message', 'postAt'])
