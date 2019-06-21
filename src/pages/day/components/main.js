import React from 'react'
import {SectionDivider, Draft} from 'components'
import TasksHoc from './tasks-hoc'

export const Main = ({willEditor, onWillEditorChange, didEditor, onDidEditorChange, date, onEditorBlur}) => (
  <main className="section">
    <div className="container">
      <div className="level">
        <div className="is-full-width box">
          <Draft
            placeholder="What good will you do today?"
            editorState={willEditor}
            onChange={onWillEditorChange}
            onBlur={onEditorBlur}
          />
        </div>
      </div>
    </div>
    <SectionDivider />
    <div className="container">
      <TasksHoc date={date} />
    </div>
    <SectionDivider />
    <div className="container">
      <div className="level">
        <div className="is-full-width box">
          <Draft
            placeholder="What good did you do today?"
            editorState={didEditor}
            onChange={onDidEditorChange}
            onBlur={onEditorBlur}
          />
        </div>
      </div>
    </div>
  </main>
)
