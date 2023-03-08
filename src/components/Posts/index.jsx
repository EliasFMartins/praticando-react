import { PostCard } from '../PostCard';
import P from 'prop-types';
import React from 'react';
import './styles.css';
export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
    {/* com parenteces da pra colocar mas de 1 linha de codigo */}
  </div>
);
Posts.defaultProps = {
  posts: [],
};
Posts.propTypes = {
  posts: P.array,
};
