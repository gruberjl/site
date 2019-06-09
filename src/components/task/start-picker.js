import React from 'react'
import moment from 'moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export class StartPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: moment(props.startDate).toDate()
    }
  }

  saveStartDate = (dt) => {
    this.setState({
      startDate: dt
    })

    const mt = moment(dt)
    if (mt.isValid()) {
      this.props.setStartDate(mt.format('YYYY-MM-DD'))
    }
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.saveStartDate}
      />
    )
  }
}
