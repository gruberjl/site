import React from 'react'
import {Icons} from 'components'
import {store} from 'lib'
import {Tab} from './tab'
import {connect} from 'lib'

const {journals} = store

export class Tabs extends React.Component {
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
    const {docs, activePage} = this.props

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

export default connect(Tabs, 'journals')
