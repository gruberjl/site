import React from 'react'
import {connect} from 'react-redux'
import {data} from 'lib'

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => {
    dispatch({type: data.actions.toggleLoginModal})
  },
  openSignupModal: () => {
    dispatch({type: data.actions.toggleSignupModal})
  },
  signout: () => {
    dispatch({type: data.actions.signout})
  }
})

export const PageHeader = ({isLoggedIn, openLoginModal, openSignupModal, signout}) => (
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
          { isLoggedIn ?
            <div className="buttons">
              <a className="button is-light" onClick={signout}>Sign Out</a>
            </div> :
            <div className="buttons">
              <a className="button is-light" onClick={openLoginModal}>Log in</a>
              <a className="button is-primary" onClick={openSignupModal}>Sign Up</a>
            </div>
          }
        </div>
      </div>
    </div>
  </nav>
)

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)
