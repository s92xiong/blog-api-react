import React, { useEffect, useState } from 'react';
import loadBlogData from '../../Javascripts/loadBlogData';
import Loader from '../Loader/Loader';
import "./Styles/Blog.css";

function Blog({ match }) {

  const [blog, setBlog] = useState([]);
  const randomImg = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [input, setInput] = useState({
    name: "",
    text: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // User submits a comment to a blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://enigmatic-bastion-98317.herokuapp.com/posts/${match.params.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...input, blog_post: match.params.id }),
    });

    window.location.reload();
  };

  useEffect(() => {
    loadBlogData(match, setBlog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (blog.length === 0) return <Loader />;

  return (
    <div className="blog">
      <p className="blog-date">{blog.date_month_day}</p>
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
      {/* LOOP THROUGH TEXT ARRAY */}
      {
        blog.text_arr.map((string, i) => {
          return (<span key={i}>
            <p className="blog-text">{string}</p>
          </span>)
        })
      }
      {/* <p className="blog-text">{blog.text}</p> */}
      <section className="comments-section">
        <h2 id="comments">Comments</h2>
        {
          blog.new_comments.map((comment, i) => (
            <div className="blog-comment" key={i}>
              <h3>{comment.name}</h3>
              <p className="comment-text">{comment.text}</p>
              <p className="comment-time">{comment.new_time}</p>
            </div>
          ))
        }
        
        <form onSubmit={handleSubmit} method="POST">
          <input 
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            required
            onChange={handleChange}
          />
          <textarea 
            name="text"
            placeholder="Share your thoughts" 
            value={input.text}
            required
            onChange={handleChange}
          >
          </textarea>
          <button className="add-comment" type="submit">Add Comment</button>
        </form>
      </section>
    </div>
  );
}

export default Blog;