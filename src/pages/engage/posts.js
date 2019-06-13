import React from 'react'
import moment from 'moment'
import {Message} from './message'
import {store} from 'lib'

export class Posts extends React.Component {
  constructor(props) {
    super(props)

    const posts = store.posts.docsByStreams(props.streams)
    this.state = {
      messages: this.mergeMessages(posts),
      posts
    }
  }

  componentDidMount() {
    store.posts.on(store.posts.events.docsUpdated, this.onPostsUpdated)
  }

  componentWillUnmount() {
    store.posts.removeListener(store.posts.events.docsUpdated, this.onPostsUpdated)
  }

  onPostsUpdated = () => {
    const posts = store.posts.docsByStreams(this.props.streams)
    this.setState({
      posts,
      messages: this.mergeMessages(posts)
    })
  }

  mergeMessages = (posts) => {
    const messages = posts.map(p => p.messages).flat()

    const ids = []

    const filtered = messages.filter(message => {
      if (ids.includes(message.id))
        return false

      ids.push(message.id)
      return true
    })

    return filtered.sort((a,b) => {
      if (moment(a.created).isBefore(b.created))
        return 1

      return -1
    })
  }

  render() {
    return (
      <div>
        { this.state.messages.map(message => (
          <Message key={message.id} message={message} />
        )) }
      </div>
    )
  }
}
