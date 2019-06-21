import React from 'react'
import {PageHeader, SectionDivider} from 'components'
import {redux} from 'lib'
import {StreamContainer} from './components'
import {connect} from 'react-redux'

const Streams = ({streams, accounts, channels}) => (
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
              <button type="button" className="button is-primary" onClick={redux.emit.streams.addDoc}>Create Stream</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
)

const docsByName = (docs) => {
  return Object.values(docs).sort((a, b) => {
    if (a.name < b.name)
      return -1

    return 1
  })
}

const mapStateToProps = state => {
  return {
    streams: docsByName(state.streams.docs),
    accounts: docsByName(state.accounts.docs),
    channels: docsByName(state.channels.docs)
  }
}

export default connect(mapStateToProps)(Streams)
