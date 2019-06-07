import React from 'react'
import {connect} from 'react-redux'
import {data, firestore} from 'lib'

const mapStateToProps = state => ({
  isOpen: state.modals.signupIsOpen,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({type: data.actions.toggleSignupModal})
})

export class SignupModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.signup = this.signup.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async signup() {
    const {email, password} = this.state
    this.setState({error: ''})
    const res = await firestore.signup(email, password)
    if (res.error) {
      this.setState({error: res.error.message})
      return
    }

    // const loginRes = await firestore.signin(email, password)
    // if (loginRes.error) {
    //   this.setState({error: loginRes.error.message})
    //   return
    // }

    this.props.closeModal()
  }

  render() {
    return (
      <div className={`modal${this.props.isOpen ? ' is-active' : ''}`}>
        <div className="modal-background" onClick={this.props.closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Sign Up</p>
            <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <div className="control">
                <input name="email" className="input" type="email" placeholder="Email Address" onChange={this.handleChange} value={this.state.email} />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input name="password" className="input" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
              </div>
            </div>

            <div>
              <p>{this.state.error}</p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.signup}>Sign Up</button>
            <button className="button" onClick={this.props.closeModal}>Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal)
