import React from 'react'
import {PageHeader} from 'components'
import {Tabs, Content} from './components'

export class Journal extends React.Component {
  render() {
    return (
      <div>
        <PageHeader/>
        <Tabs />
        <Content />
        <div>

        </div>
      </div>
    )
  }
}
