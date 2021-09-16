import React from 'react';
import "./Styles/Card.css";

function Card(props) {
  const { blogData } = props;

  if (!blogData) return <></>;

  return blogData.map((blog, i) => {
    return (
      <div className="card" key={i}>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    );
  });
}

export default Card;