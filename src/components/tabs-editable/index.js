import React from 'react'
import {Icons} from 'components'
import Tab from './tab'
import {connect} from 'react-redux'
import {redux} from 'lib'

const TabsEditable = ({collectionName, docs, activePageId}) => (
  <div className="tabs">
    <ul>
      { Object.values(docs).map(doc => (
        <Tab key={doc.id} doc={doc} activePageId={activePageId} collectionName={collectionName} />
      )) }
      <li><a onClick={redux.emit[collectionName].addDoc}><Icons.NewPage/></a></li>
    </ul>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    docs: state[props.collectionName].docs,
    activePageId: state[props.collectionName].activePageId
  }
}

export default connect(mapStateToProps)(TabsEditable)
