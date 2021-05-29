import React from 'react';
import $ from 'jquery';

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogs: [],
    };
    this.getBlogPosts = this.getBlogPosts.bind(this);
  }

  componentDidMount() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    $.ajax({
      url: 'http://3.137.145.92/blog',
      method: 'GET',
      success: (data) => {
        this.setState({
          blogs: data,
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  render() {
    const { blogs } = this.state;
    return (
      <div id="blogBG">
        <div id="blog-header">
          <span id="logoJob">Job</span>
          <span id="logoSite">Site</span>
          <span id="logoBlog">Blog</span>
        </div>
        <br />

        {blogs.map((post) => {
          const date = new Date(parseInt(post.date_posted)).toLocaleString();
        return (
        <div id="blog-post">
            <h1 className="blogpost-h1">{post.title}</h1>
            <img className="blogImg" src="https://picsum.photos/650/300"/>
            <br />
            <div className="blogpost-author">{`${post.first_name} ${post.last_name}`}</div>
            <i className="blog-post-date">{date}</i>
            <div className="blog-post-body"><p>{post.content}</p></div>
          </div>
        )})}
      </div>
    )}
}

export default Blog;