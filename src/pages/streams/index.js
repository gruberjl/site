import React from 'react'
import {PageHeader, SectionDivider} from 'components'
import {store} from 'lib'
import {StreamContainer} from './components'

export class Streams extends React.Component {
  constructor() {
    super()

    this.state = {
      docs: store.streams.docs
    }
  }

  componentDidMount() {
    store.streams.on(store.streams.events.docsUpdated, this.onDocsUpdated)
  }

  componentWillUnmount() {
    store.streams.removeListener(store.streams.events.docsUpdated, this.onDocsUpdated)
  }

  onDocsUpdated = (docs) => {
    this.setState({docs})
  }

  createStream = () => {
    const doc = store.streams.create()
    store.streams.set(doc)
  }

  render() {
    const {docs} = this.state

    return (
      <div>
        <PageHeader/>
        <main className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths is-offset-one-fifth">
                <div>
                  { Object.values(docs).sort((a,b) => a.name < b.name).map(doc => (
                    <div key={doc.id}>
                      <StreamContainer doc={doc} />
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
