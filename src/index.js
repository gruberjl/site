import "@babel/polyfill"
import 'draft-js/dist/Draft.css'
import "react-datepicker/dist/react-datepicker.css"
import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './app'

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

module.hot.accept() // eslint-disable-line
