import React from 'react'
import {docEdit} from '../doc-edit'
import {redux} from 'lib'

const Tab = ({activePageId, doc, name, onChange, save, collectionName}) => {
  if (activePageId == doc.id) {
    const size = name.length > 0 ? name.length : 1
    return (
      <li className='is-active'>
        <input name='name' value={name} onChange={onChange} onBlur={save} size={size}/>
      </li>
    )
  }

  return (
    <li>
      <input name='name' value={name} readOnly={true} size={doc.name.length} onClick={() => redux.emit.setActivePageId(collectionName)(doc.id)} />
    </li>
  )
}

export default docEdit(Tab, undefined, ['name'])
