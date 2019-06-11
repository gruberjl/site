import React from 'react'
import {workflows} from 'lib'

export class RedditBlast extends React.Component {
  constructor() {
    super()
    this.state = {
      subreddit: '',
      postType: '',
      message: '',
      url: '',
      title: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    const {subreddit, postType, message, url, title} = this.state
    workflows.redditBlast(url, message, title, subreddit, postType)
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.submit}>
            <div className="level">
              <div className="is-full-width">
                <h1 className="title">New Reddit Blast</h1>
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <input
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  className="input"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <input
                  name="subreddit"
                  value={this.state.subreddit}
                  onChange={this.onChange}
                  className="input"
                  placeholder="Subreddit"
                />
              </div>
            </div>
            <div className="level">
              <div className="select">
                <select name="postType" value={this.state.postType} onChange={this.onChange}>
                  <option value="">Post Type</option>
                  <option value="text">Text</option>
                  <option value="url">Url</option>
                </select>
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <input name="url" value={this.state.url} onChange={this.onChange} className="input" placeholder="URL" />
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  className="textarea"
                  placeholder="Post Message"
                ></textarea>
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
