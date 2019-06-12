import React from 'react'
import {PageHeader, TabsEditable} from 'components'
import {store} from 'lib'

export class Engage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: store.channels.activeTab,
      docs: store.channels.docs
    }
  }

  componentDidMount() {
    store.channels.on(store.channels.events.docsUpdated, this.onDocsUpdated)
    store.channels.on(store.channels.events.activeTabChanged, this.onActiveTabChanged)
  }

  componentWillUnmount() {
    store.channels.removeListener(store.channels.events.docsUpdated, this.onDocsUpdated)
    store.channels.removeListener(store.channels.events.activeTabChanged, this.onActiveTabChanged)
  }

  onDocsUpdated = (docs) => {
    this.setState({docs})
  }

  onActiveTabChanged = (activeTab) => {
    this.setState({activeTab})
  }

  onNameChange = (doc, name) => {
    doc.name = name
    store.channels.set(doc)
  }

  addTab = () => {
    const doc = store.channels.create()
    store.channels.set(doc)
    this.setState({activeTab: doc.id})
  }

  render() {
    const {activeTab} = this.state

    return (
      <div>
        <PageHeader/>
        <TabsEditable tabs={this.state.docs} activeTab={activeTab} setActiveTab={store.channels.setActiveTab} onNameChange={this.onNameChange} addTab={this.addTab} />
      </div>
    )
  }
}
