import React from 'react'
import {apis, store} from 'lib'
import {TwitterPost} from './twitter-post'
import {RedditDirectMessage} from './reddit-direct-message'
import moment from 'moment'

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
        const streamPosts = r.posts.map(post => {
          post.streamId = r.streamId
          return post
        })

        return streamPosts
      }).flat()
    })
  }

  onRemove = (post, account) => {
    const doc = store.engagements.create('reddit', account.id, 'deleteFromInbox', moment().toISOString())
    doc.providerId = post.id
    store.engagements.set(doc)
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          { this.state.error != ''
            ? <code>{JSON.stringify(this.state.error, null, 2)}</code>
            : ''
          }
          { this.state.posts.map(post => {
            const stream = store.streams.docs[post.streamId]
            const account = store.accounts.docs[stream.accountId]

            if (stream.type == 'Timeline')
              return <TwitterPost key={post.id} post={post} />

            if (stream.type == 'Direct Messages')
              return <RedditDirectMessage key={post.id} post={post} account={account} remove={() => this.onRemove(post, account)} />

            return <div key={post.id} />
          }) }
        </div>
      </div>
    )
  }
}
