import React from 'react'
import moment from 'moment'

export const TwitterPost = ({post}) => (
  <div className="box post-container">
    <article className="media">
      <div className="media-left">
        <figure className="image is-48x48 is-margin-auto" title={post.user.description}>
          <img className="is-rounded" src={post.user.image} alt="Image" />
        </figure>
        <a className="button is-small is-fullwidth post-follow-button">
          { post.user.following
            ? 'following'
            : 'follow'
          }
        </a>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong className="post-title" title={`@${post.user.username}`}>{post.user.name}</strong>
            <small className="dot-before post-title" title={moment(post.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}>{moment(post.created).fromNow(true)}</small>
            <small className="dot-before" title={`${post.user.followCount} Followers`}>{post.user.followCount} followers</small>
            <br />
            {post.text}
            <br />
          </p>
        </div>
        { post.sharedPost
          ? <TwitterPost post={post.sharedPost} />
          : ''
        }
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="reply">
              <span className="icon is-small">
                <i className="material-icons" aria-hidden="true">reply</i>
              </span>
            </a>
            <a className="level-item" aria-label="share">
              <span className="icon is-small">
                <i className="material-icons" aria-hidden="true">share</i>
              </span>
              <span>{post.sharedCount}</span>
            </a>
            <a className="level-item" aria-label="favorite">
              <span className="icon is-small">
                <i className="material-icons" aria-hidden="true">favorite</i>
              </span>
              <span>{post.favoriteCount}</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
)
