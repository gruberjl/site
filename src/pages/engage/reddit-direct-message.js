import React from 'react'
import moment from 'moment'

export const RedditDirectMessage = ({post, account, remove}) => (
  <div className="box post-container">
    <article className="media">
      <div className="media-left">

      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong className="post-title" title={post.subject}>{post.subject}</strong>
            <small className="dot-before post-title" title={moment(post.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}>{moment(post.created).fromNow(true)}</small>
            <small className="dot-before post-title">To: {account.name}</small>
            <br />
            {post.text}
            <br />
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="delete" onClick={remove}>
              <span className="icon is-small">
                <i className="material-icons" aria-hidden="true">delete</i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
)
