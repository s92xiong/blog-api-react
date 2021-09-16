import React from 'react';
import "./Styles/About.css";

function About(props) {

  const { name } = props;

  return (
    <div className="about">
      <div>
        <h1>About {name}</h1>
        <span>Aspiring Full Stack Developer currently learning and building projects via The Odin Project. Sharing my interests and experiences through this blog.</span>
      </div>
      <img src="https://pbs.twimg.com/profile_images/968698422751518720/zeP0peZp_400x400.jpg" alt="/" />
    </div>
  );
}

export default About;