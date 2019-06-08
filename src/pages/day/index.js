import React from 'react'
import {PageHeader, SectionDivider, QuestionWill} from 'components'
import {TaskPanel} from './components'

//          <QuestionWill date='2019-06-07' />
export const Day = () => (
  <div>
    <PageHeader/>
    <main className="section">
      <div className="container">
        <div className="level">

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
