import React from 'react';
import "./Styles/Card.css";

function Card(props) {
  const { blogData } = props;

  if (!blogData) return <>...Loading</>;
  
  return (
    <div className="card-container">
      {
        blogData.map((blog, i) => {
          return (
            <div className="card" key={i}>
              <h1>{blog.title}</h1>
              <p>{blog.text}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Card;