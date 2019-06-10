import React from 'react'
import { Link } from 'react-router-dom'
import {store} from 'lib'
import {Profile} from './profile'

const {auth} = store

export class PageHeader extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: auth.isLoggedIn
    }
  }

  componentDidMount() {
    auth.on(auth.events.login, this.onLogin)
    auth.on(auth.events.logout, this.onLogout)
  }

  componentWillUnmount() {
    auth.removeListener(auth.events.login, this.onLogin)
    auth.removeListener(auth.events.logout, this.onLogout)
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  openLoginModal = () => {
    auth.emit(auth.events.toggleSigninModal, {isOpen: true})
  }

  openSignupModal = () => {
    auth.emit(auth.events.toggleSignupModal, {isOpen: true})
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Day</Link>
            <Link to="/journal" className="navbar-item">Journal</Link>
            <Link to="/engage" className="navbar-item">Engage</Link>
            <Link to="/grow" className="navbar-item">Grow</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              { isLoggedIn ?
                <Profile /> :
                <div className="buttons">
                  <a className="button is-light" onClick={this.openLoginModal}>Log in</a>
                  <a className="button is-primary" onClick={this.openSignupModal}>Sign Up</a>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
