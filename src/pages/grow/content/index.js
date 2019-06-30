import React from 'react'
import {connect} from 'react-redux'
import {NewPost, ScheduledPost} from './post'

const Content = ({posts}) => (
  <div>
    <main className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <NewPost />
            { posts.map(doc => (
              <ScheduledPost key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
)

const mapStateToProps = state => {
  return {
    posts: Object.values(state.engagements.docs)
      .filter(e => e.type == 'post')
      .filter (e => !e.posted)
      .sort((a, b) => a.postAt < b.postAt ? -1 : 1)
  }
}

export default connect(mapStateToProps)(Content)
