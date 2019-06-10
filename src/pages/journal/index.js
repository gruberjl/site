import React from 'react'
import {PageHeader} from 'components'
import {Tabs} from './components'

export class Journal extends React.Component {
  render() {
    return (
      <div>
        <PageHeader/>
        <Tabs />
      </div>
    )
  }
}
