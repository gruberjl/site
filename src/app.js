import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Day, Journal, Engage, Accounts, Streams} from 'pages'
import {SigninModal, SignupModal} from 'components'
import {Provider} from 'react-redux'
import {redux} from 'lib'

export const App = () => (
  <div>
    <Provider store={redux.store}>
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
      <SigninModal />
      <SignupModal />
      <Router>
        <div>
          <Route exact path="/" component={Day} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/engage" component={Engage} />
          <Route exact path="/accounts" component={Accounts} />
          <Route exact path="/streams" component={Streams} />
        </div>
      </Router>
    </Provider>
  </div>
)
