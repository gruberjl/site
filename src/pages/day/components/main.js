import React from 'react'
import {SectionDivider, Draft} from 'components'
import {TaskPanel} from './task-panel'

export const Main = ({willEditor, onWillEditorChange, isLoaded, didEditor, onDidEditorChange}) => (
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
        <TaskPanel/>
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
