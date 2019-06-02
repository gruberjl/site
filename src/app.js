import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {Home} from 'pages'

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
