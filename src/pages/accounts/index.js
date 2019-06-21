import React from 'react'
import {connect} from 'react-redux'
import {redux} from 'lib'
import {PageHeader, SectionDivider} from 'components'
import {AccountContainer} from './components'

const Accounts = ({docs}) => (
  <div>
    <PageHeader/>
    <main className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div>
              { Object.values(docs).sort((a,b) => a.name < b.name).map(doc => (
                <div key={doc.id}>
                  <AccountContainer doc={doc} />
                  <SectionDivider/>
                </div>
              )) }
            </div>
            <div>
              <button type="button" className="button is-primary" onClick={redux.emit.accounts.addDoc}>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
)

const mapStateToProps = state => {
  return {
    docs: state.accounts.docs
  }
}

export default connect(mapStateToProps)(Accounts)
