import React from 'react';
import "./Styles/BlogList.css";
import Loader from "../Loader/Loader";
import commentIcon from "../../images/comment-icon.png";
import img from "../../images/img-icon.png";

function BlogList(props) {
  const { blogData } = props;
  const randomImg = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  if (!blogData) return <Loader />;
  
  return (
    <div className="blog-list-container">
      <section className="sidebar">
        <img src={img} alt="" />
        <div className="about-sidebar">
          <h3>Sheuh Xiong</h3>
          <p>Full Stack Developer currently learning and building projects via The Odin Project. Sharing my interests and experiences through this blog.</p>
        </div>
      </section>
      {
        blogData.map((blog, i) => {
          return (
            <div className="blog-card" key={i}>
              <p className="blog-card-date">{blog.date_month_day}</p>
              <a href={`/posts/${blog._id}`}>
                <h1 className="blog-card-title">{blog.title}</h1>
              </a>
              {/* <h2 className="blog-card-sub-title">{blog.sub_title}</h2> */}
              <img
                className="blog-card-img"
                src={
                  (blog.image !== "") ? blog.image : randomImg
                }
                alt="" 
              />
              <p className="blog-card-text">{blog.text}</p>
              <p className="read-more">
                <a href={`/posts/${blog._id}/`}>Read More</a>
              </p>
              <div className="comment-container">
                <a href={`/posts/${blog._id}/#comments`}>
                  <img className="comment-icon" src={commentIcon} alt="" />
                  <p>{blog.total_comments}</p>
                </a>
              </div>
              <br />
            </div>
          );
        })
      }
    </div>
  );
}

export default BlogList;