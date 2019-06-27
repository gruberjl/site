import React from 'react'
import {connect} from 'react-redux'
import TwitterEngagementChart from './twitter-engagement-chart'

class Content extends React.Component {
  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div>
                { this.props.followerCountDoc && this.props.engagementsDoc
                  ? <TwitterEngagementChart followerCountDoc={this.props.followerCountDoc} engagementsDoc={this.props.engagementsDoc} />
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
    followerCountDoc: state.analytics.docs['CnKUqzti3ZjTXt2lOzRF'],
    engagementsDoc: state.analytics.docs['frp8sotBauhhzDlPr7nH']
  }
}

export default connect(mapStateToProps)(Content)
