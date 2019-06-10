import React from 'react'
import { Link } from 'react-router-dom'
import {store} from 'lib'

const {auth} = store

export class Profile extends React.Component {
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

  handleClick = (e) => {
    if (this.node.contains(e.target))
      return

    this.closeDropdown()
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
            <div className="dropdown-item">
              <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
            </div>
            <hr className="dropdown-divider" />
            <a className="dropdown-item" onClick={auth.signout}>Sign Out</a>
          </div>
        </div>
      </div>
    )
  }
}
