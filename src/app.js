import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Today} from 'pages'

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Today} />
    </div>
  </Router>
)

// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
