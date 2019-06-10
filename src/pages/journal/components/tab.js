import React from 'react'
import clone from 'clone-deep'
import {store} from 'lib'

const {journals} = store

export class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.doc.name}
  }

  onChange = (e) => {
    this.setState({name:e.target.value})
  }

  save = () => {
    if (this.props.doc.name != this.state.name) {
      const doc = clone(this.props.doc)
      doc.name = this.state.name
      journals.set(doc)
    }
  }

  render() {
    const {activePage, doc, setActivePage} = this.props

    const size = this.state.name.length > 0 ? this.state.name.length : 1

    if (activePage == doc.id)
      return (
        <li className='is-active'>
          <input value={this.state.name} onChange={this.onChange} onBlur={this.save} size={size}/>
        </li>
      )

    return (
      <li>
        <input value={doc.name} readOnly={true} size={doc.name.length} onClick={() => setActivePage(doc.id)} />
      </li>
    )
  }
}

// <a onClick={() => setActivePage(doc.id)}>{doc.name}</a>
// <input value={this.state.name} onChange={this.onChange} onBlur={this.save} size="4"/>

// <li className='is-active'>
//   <input value={this.state.name} onChange={this.onChange} onBlur={this.save} />
// </li>
