import React from 'react'
import {connect} from 'react-redux'
import {redux, firestore} from 'lib'

class SigninModal extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  formChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signin = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    firestore.signin(email, password).then(({error}) => {
      if (error)
        this.setState({error: error.message})
    })
  }

  render() {
    const {isSigninModalOpen, closeModal} = this.props
    const {email, password, error} = this.state

    return (
      <div className={`modal${isSigninModalOpen ? ' is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <form onSubmit={this.signin}>
            <header className="modal-card-head">
              <p className="modal-card-title">Sign In</p>
              <button type="button" className="delete" aria-label="close" onClick={closeModal}></button>
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
              <button type="submit" className="button is-success">Login</button>
              <button type="button" className="button" onClick={closeModal}>Cancel</button>
            </footer>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSigninModalOpen: state.auth.isSigninModalOpen,
    closeModal: () => redux.emit.auth.toggleModal('signin', false)
  }
}

export default connect(mapStateToProps)(SigninModal)
