import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Day} from 'pages'
import {LoginModal, SignupModal} from 'components'

export const App = () => (
  <div>
    <LoginModal />
    <SignupModal />
    <Router>
      <div>
        <Route exact path="/" component={Day} />
      </div>
    </Router>
  </div>
)

// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
