import React from 'react';
import "./Styles/BlogList.css";

function BlogList(props) {
  const { blogData } = props;

  if (!blogData) return <>...Loading</>;
  
  return (
    <div className="blog-list-container">
      {
        blogData.map((blog, i) => {
          return (
            <div className="blog-card" key={i}>
              <p className="blog-card-date">{blog.date_month_day}</p>
              <a href="/">
                <h1 className="blog-card-title">{blog.title}</h1>
              </a>
              <p className="blog-card-text">{blog.text}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default BlogList;