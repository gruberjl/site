import React from 'react'
import clone from 'clone-deep'

export class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.tab.name}
  }

  onChange = (e) => {
    this.setState({name:e.target.value})
  }

  save = () => {
    if (this.props.tab.name != this.state.name) {
      this.props.onNameChange(clone(this.props.tab), this.state.name)
    }
  }

  render() {
    const {activeTab, tab, setActiveTab} = this.props

    const size = this.state.name.length > 0 ? this.state.name.length : 1

    if (activeTab == tab.id)
      return (
        <li className='is-active'>
          <input value={this.state.name} onChange={this.onChange} onBlur={this.save} size={size}/>
        </li>
      )

    return (
      <li>
        <input value={tab.name} readOnly={true} size={tab.name.length} onClick={() => setActiveTab(tab.id)} />
      </li>
    )
  }
}
