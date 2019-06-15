import React from 'react'
import {PageHeader, SectionDivider} from 'components'
import {store} from 'lib'
import {StreamContainer} from './components'

export class Streams extends React.Component {
  constructor() {
    super()

    this.state = {
      streams: store.streams.docsByName(),
      accounts: store.accounts.docsByName(),
      channels: store.channels.docsByName()
    }
  }

  componentDidMount() {
    store.streams.on(store.streams.events.docsUpdated, this.onStreamsUpdated)
    store.accounts.on(store.accounts.events.docsUpdated, this.onAccountsUpdated)
    store.channels.on(store.channels.events.docsUpdated, this.onChannelsUpdated)
  }

  componentWillUnmount() {
    store.streams.removeListener(store.streams.events.docsUpdated, this.onStreamsUpdated)
  }

  onStreamsUpdated = () => {
    const streams = Object.values(store.streams.docs)
    this.setState({streams})
  }

  onAccountsUpdated = () => {
    this.setState({accounts: store.accounts.docsByName()})
  }

  onChannelsUpdated = () => {
    this.setState({channels: store.channels.docsByName()})
  }

  createStream = () => {
    const doc = store.streams.create()
    store.streams.set(doc)
  }

  render() {
    const {streams, accounts, channels} = this.state

    return (
      <div>
        <PageHeader/>
        <main className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths is-offset-one-fifth">
                <div>
                  { streams.map(stream => (
                    <div key={stream.id}>
                      <StreamContainer stream={stream} accounts={accounts} channels={channels} />
                      <SectionDivider/>
                    </div>
                  )) }
                </div>
                <div>
                  <button type="button" className="button is-primary" onClick={this.createStream}>Create Stream</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
