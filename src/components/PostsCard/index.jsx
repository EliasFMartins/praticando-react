import './styles.css';
import P from 'prop-types';
import React from 'react';
export const PostsCard = ({ title, cover, body, id }) => {
  return (
    <div className="card-content">
      <img src={cover} alt="foto" />
      <div className="card" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
PostsCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
