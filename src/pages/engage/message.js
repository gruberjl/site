import React from 'react'
import moment from 'moment'

export const Message = ({message}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-48x48" title={message.user.description}>
          <img className="is-rounded" src={message.user.image} alt="Image" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong className="message-title" title={`@${message.user.username}`}>{message.user.name}</strong>
            <small className="dot-before message-title" title={moment(message.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}>{moment(message.created).fromNow(true)}</small>
            <small className="dot-before" title={`${message.user.followCount} Followers`}>{message.user.followCount}f</small>
            <br />
            {message.text}
            <br />
            {JSON.stringify(message, null, 2)}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="reply">
              <span className="icon is-small">
                <i className="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a className="level-item" aria-label="retweet">
              <span className="icon is-small">
                <i className="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a className="level-item" aria-label="like">
              <span className="icon is-small">
                <i className="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
)
