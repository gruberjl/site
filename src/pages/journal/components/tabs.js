import React from 'react'
import {Icons} from 'components'
import {store} from 'lib'
import {Tab} from './tab'

const {journals} = store

export class Tabs extends React.Component {
  constructor() {
    super()

    this.state = {
      activePage: journals.activePage,
      docs: journals.docs
    }
  }

  componentDidMount() {
    journals.on(journals.events.docsUpdated, this.onDocsUpdated)
    journals.on(journals.events.activePageChanged, this.onActivePageChanged)
  }

  componentWillUnmount() {
    journals.removeListener(journals.events.docsUpdated, this.onDocsUpdated)
    journals.removeListener(journals.events.activePageChanged, this.onActivePageChanged)
  }

  onDocsUpdated = (docs) => {
    this.setState({docs})
  }

  onActivePageChanged = (activePage) => {
    this.setState({activePage})
  }

  addPage = () => {
    const page = journals.create()
    journals.set(page)
    this.setState({activePage: page.id})
  }

  setActivePage = (pageId) => {
    journals.setActivePage(pageId)
  }

  render() {
    const {activePage, docs} = this.state
    return (
      <div className="tabs">
        <ul>
          { Object.values(docs).map(doc => (
            <Tab key={doc.id} doc={doc} activePage={activePage} setActivePage={this.setActivePage} />
          )) }
          <li><a onClick={this.addPage}><Icons.NewPage/></a></li>
        </ul>
      </div>
    )
  }
}
