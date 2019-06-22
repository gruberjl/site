import React from 'react'
import {MainHoc} from './main-hoc'
import {connect} from 'react-redux'
import {redux} from 'lib'

class QuestionHoc extends React.Component {
  constructor(props) {
    super()

    if (!props.doc)
      redux.emit.questions.addDoc(props.id, props.date)
  }

  render() {
    return (
      <div>
        { this.props.doc
          ? <MainHoc date={this.props.date} questionDoc={this.props.doc} />
          : <div/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = `${state.auth.user.uid}-${props.date}`
  return {
    doc: state.questions.docs[id],
    id
  }
}

export default connect(mapStateToProps)(QuestionHoc)
