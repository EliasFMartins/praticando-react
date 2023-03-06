import "./styles.css";
import { Component } from "react";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerpage: 5,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const { page, postPerpage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerpage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerpage, allPosts, posts } = this.state;
    const nextPage = page + postPerpage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerpage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };
  handleChange = (e) =>{
    const { value } = e.target;
    this.setState({ searchValue: value });
  }
  render() {
    const { posts, page, postPerpage, allPosts , searchValue } = this.state;
    const noMorePosts = page + postPerpage >= allPosts.length;
    const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())})
    :posts;
    return (
      <section>
      <div className="search-container">

      
        {!!searchValue &&(
          <h1>Search value: {searchValue}</h1>
        )}
       <TextInput searchValue={searchValue}
        handleChange={this.handleChange}
       />
       </div>
  
    
        {filteredPosts.length>0&&(
        <Posts posts={filteredPosts} />

        )}
        {filteredPosts.length===0&&(
        <h1>{'Nada a dizer meu consagrado'}</h1>

        )}
        <div className="button-container">
        {!searchValue&&(
          <Button
            disabled={noMorePosts}
            loadMorePosts={this.loadMorePosts}
            text="Load More Posts"
          />
        )}
        
        </div>
      </section>
    );
  }
}
