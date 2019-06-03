import React from 'react'
import {PageHeader} from 'components'
import {GoodDid} from './components'

export const Today = () => (
  <div>
    <PageHeader/>
    <main className="container">
      <div className="level">
        <GoodDid />
      </div>

      <div className="level">
        <textarea className="textarea" placeholder="What good did you do today?" rows="3"></textarea>
      </div>
    </main>
  </div>
)
