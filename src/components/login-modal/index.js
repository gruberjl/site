import React from 'react'
import {connect} from 'react-redux'
import {data} from 'lib'

const mapStateToProps = state => ({
  isOpen: state.modals.loginIsOpen,
})

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch({type: data.actions.toggleLoginModal})
    }
  }
}

const LoginModal = ({isOpen, closeModal}) => (
  <div className={`modal${isOpen ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={closeModal}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Login</p>
        <button className="delete" aria-label="close" onClick={closeModal}></button>
      </header>
      <section className="modal-card-body">
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Email Address" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="password" placeholder="Password" />
          </div>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Login</button>
        <button className="button" onClick={closeModal}>Cancel</button>
      </footer>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
