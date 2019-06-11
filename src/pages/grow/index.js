import React from 'react'
import {PageHeader} from 'components'
import {TwitterBlast} from './twitter-blast'
import {RedditBlast} from './reddit-blast'

export class Grow extends React.Component {
  constructor() {
    super()
    this.state = {
      tabSelected: 'twitter-blast'
    }
  }

  selectTab = (e) => {
    this.setState({tabSelected: e.target.name})
  }

  render() {
    const {tabSelected} = this.state
    return (
      <div>
        <PageHeader/>
        <div className="tabs">
          <ul>
            <li className={tabSelected == 'twitter-blast' ? "is-active" : ''}>
              <a name='twitter-blast' onClick={this.selectTab}>Twitter Blast</a>
            </li>
            <li className={tabSelected == 'reddit-blast' ? "is-active" : ''}>
              <a name='reddit-blast' onClick={this.selectTab}>RedditBlast</a>
            </li>
          </ul>
        </div>
        { this.state.tabSelected == 'twitter-blast'
          ? <TwitterBlast />
          : <RedditBlast />
        }
      </div>
    )
  }
}
