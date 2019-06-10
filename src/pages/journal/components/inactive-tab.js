import React from 'react'

export const InactiveTab = ({id, name, setActivePage}) => (
  <li>
    <a onClick={() => setActivePage(id)}>{name}</a>
  </li>
)
