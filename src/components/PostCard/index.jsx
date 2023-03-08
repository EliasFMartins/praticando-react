import './styles.css';
import P from 'prop-types';

import React from 'react';
export const PostCard = ({ title, cover, id, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title}
        {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);
PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
