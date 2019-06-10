import React from 'react'

export const ActiveTab = ({id, name, setActivePage}) => (
  <li className='is-active'>
    <a onClick={() => setActivePage(id)}>{name}</a>
  </li>
)
