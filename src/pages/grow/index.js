import React from 'react'
import {PageHeader} from 'components'
import Content from './content'

export class Grow extends React.Component {
  render() {
    return (
      <div>
        <PageHeader/>
        <Content/>
      </div>
    )
  }
}
