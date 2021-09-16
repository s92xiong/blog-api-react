import React from 'react';
import "./Styles/Card.css";

function BlogList(props) {
  const { blogData } = props;

  if (!blogData) return <>...Loading</>;
  
  return (
    <div className="blog-list-container">
      {
        blogData.map((blog, i) => {
          return (
            <div className="blog-card" key={i}>
              <h1>{blog.title}</h1>
              <p>{blog.text}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default BlogList;