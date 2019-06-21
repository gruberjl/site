import React from 'react'
import {docEdit} from 'components'

const Tab = ({activePage, doc, setActivePage, name, onChange, save}) => {
  const size = name.length > 0 ? name.length : 1

  if (activePage == doc.id)
    return (
      <li className='is-active'>
        <input name="name" value={name} onChange={onChange} onBlur={save} size={size}/>
      </li>
    )

  return (
    <li>
      <input value={doc.name} readOnly={true} size={doc.name.length} onClick={() => setActivePage(doc.id)} />
    </li>
  )
}

export default docEdit(Tab, 'journals', ['name'])
