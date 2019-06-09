import React from 'react'
import {Icons} from '../icons'
import moment from 'moment'

export const DoneCheck = ({done, markDone}) => (
  <div className="task-done-container">
    { done == ''
      ? (
        <button className="button-clear" type="button" onClick={() => markDone(moment().format('YYYY-MM-DD'))} >
          <Icons.CheckmarkOutline/>
        </button>
      ) : (
        <button className="button-clear" type="button" onClick={() => markDone('')} >
          <Icons.Checkmark/>
        </button>
      )
    }
  </div>
)
