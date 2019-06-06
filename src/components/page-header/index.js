import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user
})

export const PageHeader = ({isLoggedIn}) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="/assets/imgs/gitbit-icon-mercury-50x50.png" width="28" height="28" />
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            { isLoggedIn ?
              <a className="button is-primary">Account</a> :
              <a className="button is-light">Log in</a>
            }
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default connect(mapStateToProps)(PageHeader)
