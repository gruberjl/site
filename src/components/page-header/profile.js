import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import {redux} from 'lib'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {isActive: ''}
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      this.closeDropdown()
    }
  }

  handleClick = (e) => {
    if (this.state.isActive && this.node) {
      if (this.node.contains(e.target))
        return

      this.closeDropdown()
    }
  }

  openDropdown = () => {
    this.setState({isActive: 'is-active'})
  }

  closeDropdown = () => {
    this.setState({isActive: ''})
  }

  render() {
    return (
      <div className={`dropdown ${this.state.isActive} is-right`}>
        <div className="dropdown-trigger">
          <button onClick={this.openDropdown} className="button button-clear" aria-haspopup="true" aria-controls="profile-menu">
            <img src="/assets/imgs/icon-account.png" />
          </button>
        </div>
        <div ref={node => this.node = node} className="dropdown-menu" id="profile-menu" role="menu">
          <div className="dropdown-content">
            <Link className="dropdown-item" to="/accounts">Accounts</Link>
          </div>
          <div className="dropdown-content">
            <Link className="dropdown-item" to="/streams">Streams</Link>
          </div>
          <div className="dropdown-content">
            <a className="dropdown-item" onClick={redux.emit.auth.signout}>Sign Out</a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
