import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Today} from 'pages'
import {data} from 'lib'
import {LoginModal, SignupModal} from 'components'

export const App = () => (
  <Provider store={data.store}>
    <div>
      <LoginModal />
      <SignupModal />
      <Router>
        <div>
          <Route exact path="/" component={Today} />
        </div>
      </Router>
    </div>
  </Provider>
)

// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
