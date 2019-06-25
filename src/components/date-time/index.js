import React from 'react'
import moment from 'moment'

export class DateTime extends React.Component {
  onChange = (event) => {
    if (event.target.value == '')
      return this.props.onChange(event)

    const m = moment(event.target.value)
    if (m.isValid()) {
      const e = {target: {
        type: event.target.type,
        name: event.target.name,
        value: m.toISOString()
      }}
      return this.props.onChange(e)
    }

    this.props.onChange(event)
  }

  render() {
    const date = moment(this.props.value)
    const value = date.isValid() ? date.format(moment.HTML5_FMT.DATETIME_LOCAL) : this.props.value

    return (
      <input
        {...this.props}
        type="datetime-local"
        value={value}
        onChange={this.onChange}
      />
    )
  }
}
