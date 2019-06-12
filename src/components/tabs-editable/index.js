import React from 'react'
import {Icons} from 'components'
import {Tab} from './tab'

export const TabsEditable = ({tabs, activeTab, setActiveTab, onNameChange, addTab}) => (
  <div className="tabs">
    <ul>
      { Object.values(tabs).map(tab => (
        <Tab key={tab.id} tab={tab} activeTab={activeTab} setActivePage={setActiveTab} onNameChange={onNameChange} />
      )) }
      <li><a onClick={addTab}><Icons.NewPage/></a></li>
    </ul>
  </div>
)
