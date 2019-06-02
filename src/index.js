import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

const title = 'My Minimal React Webpack Babel Setup'

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
)

module.hot.accept() // eslint-disable-line
