import React from 'react'
import {PageHeader, SectionDivider, Draft} from 'components'
import {TaskPanel} from './components'

export const Today = () => (
  <div>
    <PageHeader/>
    <main className="section">
      <div className="container">
        <div className="level">
          <Draft placeholder="What good will you do today?" />
        </div>
      </div>
      <SectionDivider />
      <div className="container">
        <div className="level">
          <TaskPanel/>
        </div>
      </div>
      <SectionDivider />
      <div className="container">
        <div className="level">
          <textarea className="textarea" placeholder="What good did you do today?" rows="3"></textarea>
        </div>
      </div>
    </main>
  </div>
)
