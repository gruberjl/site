import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Today} from 'pages'
import {data} from 'lib'

export const App = () => (
  <Provider store={data.store}>
    <Router>
      <div>
        <Route exact path="/" component={Today} />
      </div>
    </Router>
  </Provider>
)

// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
