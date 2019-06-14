import React from 'react'
import {apis} from 'lib'
import {Post} from './post'

export class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    const response = await apis.posts.get(this.props.channel.id).catch(error => ({error}))

    if (response.error) {
      this.setState({error: response.error})
      return
    }

    this.setState({
      posts: response.map(r => {
        return r.posts
      }).flat()
    })
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          { this.state.error != ''
            ? <code>{JSON.stringify(this.state.error, null, 2)}</code>
            : ''
          }
          { this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          )) }
        </div>
      </div>
    )
  }
}
