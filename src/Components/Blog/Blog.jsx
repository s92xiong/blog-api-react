import React, { useEffect, useState } from 'react';
import loadBlogData from '../../Javascripts/loadBlogData';
import "./Styles/Blog.css";

function Blog({ match }) {

  const [blog, setBlog] = useState([]);
  const randomImg = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    loadBlogData(match, setBlog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (blog.length === 0) {
    return <p>Loading blog...</p>
  }

  return (
    <div className="blog">
      <h1 className="blog-title">{blog.title}</h1>
      <h1 className="blog-subtitle">{blog.sub_title}</h1>
      <img
        className="blog-img"
        style={{ width: "100%", height: "auto" }}
        src={
          (blog.image !== "") ? blog.image : randomImg
        }
        alt="" 
      />
      <p className="blog-text">{blog.text}</p>
      {
        blog.comments.map((comment, i) => (
          <div className="blog-comment" key={i}>
            <h3>{comment.name}</h3>
            <p>{comment.text}</p>
            <p>{comment.timestamp}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Blog;