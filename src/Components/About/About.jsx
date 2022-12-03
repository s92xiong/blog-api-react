import React from 'react';
import "./Styles/About.css";
import img from "../../images/self-img.jpeg";

function About(props) {

  const { name } = props;

  return (
    <div className="about-container">
      <div className="about">
        <div className="about-info">
          <h1>About {name}</h1>
          <br />
          <span>Software Developer with experience in MongoDB, Express, React, and Node. I previously worked on building i-Sight, a case management platform for corporate investigations</span>
        </div>
        <img className='self-img' src={img} alt="/" />
      </div>
    </div>
  );
}

export default About;