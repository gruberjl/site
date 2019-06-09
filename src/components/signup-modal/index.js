import React from 'react'
import {store} from 'lib'

const {auth} = store

export class SignupModal extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
      email: '',
      password: '',
      error: ''
    }
  }

  componentDidMount() {
    auth.on(auth.events.toggleSignupModal, this.toggleModal)
  }

  componentWillUnmount() {
    auth.removeListener(auth.events.toggleSignupModal, this.toggleModal)
  }

  toggleModal = ({isOpen}) => {
    this.setState({isOpen})
  }

  closeModal = () => {
    auth.emit(auth.events.toggleSignupModal, {isOpen: false})
  }

  formChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signup = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    auth.signup(email, password).then(({error}) => {
      this.setState({error})
    })
  }

  render() {
    const {isOpen, email, password, error} = this.state

    return (
      <div className={`modal${isOpen ? ' is-active' : ''}`}>
        <div className="modal-background" onClick={this.closeModal}></div>
        <div className="modal-card">
          <form onSubmit={this.signup}>
            <header className="modal-card-head">
              <p className="modal-card-title">Signup</p>
              <button className="delete" aria-label="close" onClick={this.closeModal}></button>
            </header>
            <section className="modal-card-body">

              <div className="field">
                <div className="control">
                  <input
                    name="email"
                    value={email}
                    className="input"
                    type="email"
                    placeholder="Email Address"
                    onChange={this.formChange}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    name="password"
                    value={password}
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={this.formChange}
                  />
                </div>
              </div>

              <div>
                <p>{error}</p>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-success">Sign Up</button>
              <button className="button" onClick={this.closeModal}>Cancel</button>
            </footer>
          </form>
        </div>
      </div>
    )
  }
}
