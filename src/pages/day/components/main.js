import React from 'react'
import {SectionDivider, Draft} from 'components'
import {TasksHoc} from './tasks-hoc'

export const Main = ({willEditor, onWillEditorChange, isLoaded, didEditor, onDidEditorChange, date}) => (
  <main className="section">
    <div className="container">
      <div className="level">
        <Draft
          placeholder="What good will you do today?"
          editorState={willEditor}
          onChange={onWillEditorChange}
          readOnly={!isLoaded}
        />
      </div>
    </div>
    <SectionDivider />
    <div className="container">
      <div className="level">
        <TasksHoc date={date} />
      </div>
    </div>
    <SectionDivider />
    <div className="container">
      <div className="level">
        <Draft
          placeholder="What good did you do today?"
          editorState={didEditor}
          onChange={onDidEditorChange}
          readOnly={!isLoaded}
        />
      </div>
    </div>
  </main>
)
