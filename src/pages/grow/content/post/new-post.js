import React from 'react'
import Form from './form'
import moment from 'moment'
import shortid from 'shortid'
import {connect} from 'react-redux'

const buildPost = () => ({
  id: shortid.generate(),
  message: '',
  postAt: moment().month(6).hour(16).minute(0).second(0).millisecond(0).toDate(),
  posted: false,
  type: 'post',
  accountId: 'kxBWZz5G5'
})

class NewPost extends React.Component {
  constructor() {
    super()
    this.state = {doc: buildPost()}
  }

  componentDidUpdate() {
    if (this.props.posts[this.state.doc.id]) {
      this.setState({doc: buildPost()})
    }
  }

  render() {
    return (<Form doc={this.state.doc} />)
  }
}

const mapStateToProps = state => {
  return {
    posts: state.engagements.docs
  }
}

export default connect(mapStateToProps)(NewPost)
