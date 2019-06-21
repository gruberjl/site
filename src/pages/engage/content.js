import React from 'react'
import {connect} from 'react-redux'

const Content = ({doc}) => (
  <div>
    <h1>Channnel: {doc.name}</h1>
  </div>
)

const mapStateToProps = (state) => {
  return {
    doc: state.channels.docs[state.channels.activePageId]
  }
}

export default connect(mapStateToProps)(Content)
