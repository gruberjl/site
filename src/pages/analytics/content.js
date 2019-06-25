import React from 'react'
import {connect} from 'react-redux'
import TwitterFollowerChart from './twitter-follower-chart'

class Content extends React.Component {
  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <div>
                { this.props.followerCountDoc
                  ? <TwitterFollowerChart followerCountDoc={this.props.followerCountDoc} />
                  : <div/>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    followerCountDoc: state.analytics.docs['CnKUqzti3ZjTXt2lOzRF']
  }
}

export default connect(mapStateToProps)(Content)
