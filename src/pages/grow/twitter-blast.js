import React from 'react'
import {workflows} from 'lib'

const maxTweetLength = 280
const tweetUrlLength = 28

export class TwitterBlast extends React.Component {
  constructor() {
    super()
    this.state = {
      charactersLeft: 280,
      message: '',
      url: ''
    }
  }

  onMessageChange = (e) => {
    this.setState({
      charactersLeft: maxTweetLength - tweetUrlLength - e.target.value.length,
      message: e.target.value
    })
  }

  onUrlChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    workflows.tweetBlast(this.state.url, this.state.message)
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.submit}>
            <div className="level">
              <div className="is-full-width">
                <h1 className="title">New Twitter Blast</h1>
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <input value={this.state.url} onChange={this.onUrlChange} className="input" placeholder="URL" />
              </div>
            </div>
            <div className="level">
              <div className="is-full-width">
                <textarea value={this.state.message} onChange={this.onMessageChange} className="textarea" placeholder="Tweet Message"></textarea>
                <span>Characters Left: {this.state.charactersLeft}</span>
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
