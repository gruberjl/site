import React from 'react'
import { Link } from 'react-router-dom'
import {redux} from 'lib'
import Profile from './profile'
import {connect} from 'react-redux'

class PageHeader extends React.Component {
  render() {
    const {isLoggedIn} = this.props

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
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              { isLoggedIn ?
                <Profile /> :
                <div className="buttons">
                  <a className="button is-light" onClick={() => redux.emit.auth.toggleModal('signin')}>Log in</a>
                  <a className="button is-primary" onClick={() => redux.emit.auth.toggleModal('signup')}>Sign Up</a>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(PageHeader)
