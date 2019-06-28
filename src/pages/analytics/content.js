import React from 'react'
import {connect} from 'react-redux'
import TwitterEngagementChart from './twitter-engagement-chart'
import {TweetAnalytics} from './tweet-analytics'

class Content extends React.Component {
  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div>
                { this.props.followerCountDoc
                  ? <TwitterEngagementChart followerCountDoc={this.props.followerCountDoc} engagementsDoc={this.props.engagementsDoc} />
                  : <div/>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          { this.props.timelineDoc
            ? <TweetAnalytics timelineDoc={this.props.timelineDoc} />
            : <div/>
          }
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    followerCountDoc: state.analytics.docs['CnKUqzti3ZjTXt2lOzRF'],
    timelineDoc: state.analytics.docs['5VQPMI4uVHeJuExRGbPL']
  }
}

export default connect(mapStateToProps)(Content)
