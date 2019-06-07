import React from 'react'
import {connect} from 'react-redux'
import {data} from 'lib'

const mapStateToProps = state => ({
  isOpen: state.modals.signupIsOpen,
  data: state.formSignup.data,
  submitError: state.formSignup.submitError
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch({type: data.actions.toggleSignupModal})
  },
  formChange: (e) => {
    dispatch({
      type: data.actions.formSignupChange,
      name: e.target.name,
      value: e.target.value
    })
  },
  submitForm: async (e) => {
    e.preventDefault()
    dispatch({
      type: data.actions.formSignupSubmit
    })
  }
})

const LoginModal = ({isOpen, closeModal, data, formChange, submitForm, submitError}) => (
  <div className={`modal${isOpen ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={closeModal}></div>
    <div className="modal-card">
      <form onSubmit={submitForm}>
        <header className="modal-card-head">
          <p className="modal-card-title">Signup</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">

          <div className="field">
            <div className="control">
              <input name="email" value={data.email} className="input" type="email" placeholder="Email Address" onChange={formChange} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input name="password" value={data.password} className="input" type="password" placeholder="Password" onChange={formChange} />
            </div>
          </div>

          <div>
            <p>{submitError}</p>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button type="submit" className="button is-success">Sign Up</button>
          <button className="button" onClick={closeModal}>Cancel</button>
        </footer>
      </form>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
