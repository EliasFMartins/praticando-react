import { PostsCard } from "../PostsCard";
import './styles.css'

export const Posts = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <PostsCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
