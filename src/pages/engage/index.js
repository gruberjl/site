import React from 'react'
import {PageHeader, TabsEditable} from 'components'
import Content from './content'
import {connect} from 'react-redux'

const Engage = ({activePageId}) => (
  <div>
    <PageHeader/>
    <TabsEditable
      collectionName={'channels'}
    />
    { activePageId == ''
      ? <div />
      : <Content />
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    activePageId: state['channels'].activePageId
  }
}

export default connect(mapStateToProps)(Engage)
