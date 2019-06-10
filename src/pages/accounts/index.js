import React from 'react'
import {PageHeader} from 'components'
import {store} from 'lib'

const {accounts} = store

export class Accounts extends React.Component {
  constructor() {
    super()

    this.state = {
      docs: accounts.docs
    }
  }

  componentDidMount() {
    accounts.on(accounts.events.docsUpdated, this.onDocsUpdated)
  }

  componentWillUnmount() {
    accounts.removeListener(accounts.events.docsUpdated, this.onDocsUpdated)
  }

  onDocsUpdated = (docs) => {
    this.setState({docs})
  }

  render() {
    const {docs} = this.state

    return (
      <div>
        <PageHeader/>
        <main className="section">
          <div className="container">
            <div className="level">
              <div className="is-full-width">
                { Object.values(docs).map(doc => (
                  <div key={doc.id}>
                    <h3>{doc.name}</h3>
                  </div>
                )) }
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
