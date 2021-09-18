/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Styles/Blog.css";

function Blog({ match }) {

  const [blog, setBlog] = useState();

  const loadBlogData = async (setBlog) => {
    const response = await fetch(`https://enigmatic-bastion-98317.herokuapp.com${match.url}`);
    const json_data = await response.json();
    console.log(json_data);
    setBlog(json_data);
  };
  

  useEffect(() => {
    loadBlogData(setBlog);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="blog">
      
    </div>
  );
}

export default Blog;