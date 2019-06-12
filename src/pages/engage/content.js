import React from 'react'
import {Post} from './post'
import {store} from 'lib'

export class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      streamDocs: store.streams.docsByChannel(props.channel.id)
    }
  }

  componentDidMount() {
    store.streams.on(store.streams.events.docsUpdated, this.onStreamsUpdated)
  }

  componentWillUnmount() {
    store.streams.removeListener(store.streams.events.docsUpdated, this.onStreamsUpdated)
  }

  onStreamsUpdated = () => {
    this.setState({streamDocs: store.streams.docsByChannel(this.props.channel.id)})
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Post />
        </div>
      </div>
    )
  }
}
