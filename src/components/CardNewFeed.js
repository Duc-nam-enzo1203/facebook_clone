import React from "react";

export default function CartPosts({
  key,
  title,
  avatar,
  time,
  content,
  slug,
  detail,
  image,
}) {
  return (
    <div className="card post" key={key}>
      <div className="post-header">
        <div className="post-author-info">
          <img src={avatar} />
          <div>
            <div>
              <span className="author-name">{title}</span>
              <i className="verified-icon" />
            </div>
            <div className="details">
              <span>{time}</span>
              <span> · </span>
              <i className="post-settings-icon" />
            </div>
          </div>
        </div>
        <i className="post-menu-icon" />
      </div>
      <p className="post-body">{content}</p>
      <a className="post-image">
        <img src={image} style={{ maxHeight: "500px", objectFit: "cover" }} />
        <div className="excerpt">
          <div className="post-info-icon-wrap">
            <i className="post-info-icon" />
          </div>
          <label>{detail}</label>
          <h3>
            India’s Unusual Vaccine Problem: Plenty of Shots, But Few Takers
          </h3>
          <span>
            Most of the world is struggling to secure enough vaccines to
            inoculate their populations. India has the opposite problem: Plenty
            of shots, but a shortage of people willing to take them.
          </span>
        </div>
      </a>
      <div className="post-reactions">
        <div className="reactions">
          <div className="emojis">
            <img src="/images/wow.svg" />
            <img src="/images/haha.svg" />
            <img src="/images/like.svg" />
          </div>
          <span>366</span>
        </div>
        <div className="comment-share">
          <div>
            <span>121</span>
            <span>Comments</span>
          </div>
          <div className="shares">
            <span>48</span>
            <span>Shares</span>
          </div>
        </div>
      </div>
      <div className="post-actions ps-0" style={{ overflow: "hidden" }}>
        <div className="actions">
          <button className="action">
            <i className="like-icon" />
            <span>Like</span>
          </button>
          <button className="action">
            <i className="comment-icon" />
            <span>Comment</span>
          </button>
          <button className="action">
            <i className="share-icon" />
            <span>Share</span>
          </button>
        </div>
        <div className="interact-as">
          <img src="images/profile-40.jpg" />
          <i className="dropdown-icon-small" />
        </div>
      </div>
    </div>
  );
}
