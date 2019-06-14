import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Day, Journal, Engage, Grow, Accounts, Streams} from 'pages'
import {LoginModal, SignupModal} from 'components'

export const App = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
    <LoginModal />
    <SignupModal />
    <Router>
      <div>
        <Route exact path="/" component={Day} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/engage" component={Engage} />
        <Route exact path="/grow" component={Grow} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/streams" component={Streams} />
      </div>
    </Router>
  </div>
)

// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
