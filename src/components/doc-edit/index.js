import React from 'react'
import clone from 'clone-deep'
import {redux} from 'lib'

export const docEdit = (WrappedComponent, collectionName, fields) => {
  return class DocEdit extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      fields.forEach(field => {
        this.state[field] = props.doc[field] // eslint-disable-line
      })
    }

    onChange = (event) => {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
      this.setState({[event.target.name]: value})
    }

    save = () => {
      let hasChanged = false

      Object.keys(this.state).forEach(key => {
        if (this.props.doc[key] != this.state[key])
          hasChanged = true
      })

      if (hasChanged) {
        const doc = clone(this.props.doc)

        Object.keys(this.state).forEach(key => {
          doc[key] = this.state[key]
        })

        const conName = collectionName || this.props.collectionName
        redux.emit.db.setDoc(conName, doc)
      }
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} onChange={this.onChange} save={this.save} />
    }
  }
}
