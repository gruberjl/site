import React from 'react'
import {Icons} from 'components'
import {redux} from 'lib'
import Tab from './tab'
import {connect} from 'react-redux'

const Tabs = ({docs, activePageId}) => (
  <div className="tabs">
    <ul>
      { Object.values(docs).map(doc => (
        <Tab key={doc.id} doc={doc} activePage={activePageId} setActivePage={redux.emit.journals.setActivePage} />
      )) }
      <li><a onClick={redux.emit.journals.addPage}><Icons.NewPage/></a></li>
    </ul>
  </div>
)

const mapStateToProps = state => {
  return {
    docs: state.journals.docs,
    activePageId: state.journals.activePageId
  }
}

export default connect(mapStateToProps)(Tabs)
