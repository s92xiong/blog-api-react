import React from 'react';
import "./Styles/About.css";
import img from "../../images/img-icon.png";

function About(props) {

  const { name } = props;

  return (
    <div className="about">
      <div className="about-info">
        <h1>About {name}</h1>
        <span>Full Stack Developer currently learning and building projects via The Odin Project. Sharing my interests and experiences through this blog.</span>
      </div>
      <img src={img} alt="/" />
    </div>
  );
}

export default About;