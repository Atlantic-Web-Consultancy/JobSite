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

  getBlogPosts() {
    $.ajax({
      url: 'http://3.137.145.92/blog',
      method: 'GET',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  render() {
    return (
      <div id="blogBG">
        <div id="blog-header">
          <span id="logoJob">Job</span>
          <span id="logoSite">Site</span>
          <span id="logoBlog">Blog</span>
        </div>
        <br />
        <div id="blog-post">
        <button onClick={() => {this.getBlogPosts()}}> GET BLOG POSTS</button>
          <h1 className="blogpost-h1">What is Lorem Ipsum?</h1>
          <img className="blogImg" src="https://picsum.photos/650/300"/>
          <br />
          <div className="blogpost-author">I ain't write this</div>
          <i className="blog-post-date">{new Date().toLocaleString()}</i>
          <div className="blog-post-body"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        </div>
      </div>
    )}
}

export default Blog;