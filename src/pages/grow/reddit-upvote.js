import React from 'react'
import {workflows} from 'lib'

export class RedditUpvote extends React.Component {
  constructor() {
    super()
    this.state = {
      postId: '',
      primaryAccountId: 'Z17TIhTNt'
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    const {postId, primaryAccountId} = this.state
    workflows.redditUpvote(postId, primaryAccountId)
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.submit}>
            <div className="level">
              <div className="is-full-width">
                <h1 className="title">New Reddit Upvote</h1>
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <label className="label">Post Id</label>
                <input
                  name="postId"
                  value={this.state.postId}
                  onChange={this.onChange}
                  className="input"
                  placeholder="Post Id"
                />
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <label className="label">Primary Account Id</label>
                <input
                  name="primaryAccountId"
                  value={this.state.primaryAccountId}
                  onChange={this.onChange}
                  className="input"
                  placeholder="Primary Account Id"
                />
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <button type="submit" className="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}
