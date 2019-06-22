import React from 'react'
import {PageHeader} from 'components'
import {QuestionHoc} from './components'
import {connect} from 'react-redux'
import moment from 'moment'

class Day extends React.Component {
  constructor() {
    super()
    this.date = moment().format('YYYY-MM-DD')
  }

  render() {
    return (
      <div>
        <PageHeader/>
        { this.props.haveLoaded
          ? <QuestionHoc date={this.date} />
          : <div/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    docs: state.questions.docs,
    haveLoaded: state.questions.haveLoaded
  }
}

export default connect(mapStateToProps)(Day)
