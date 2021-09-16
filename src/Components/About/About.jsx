import React from 'react';

function About(props) {

  const { name } = props;

  return (
    <div className="about">
      <h1>About {name}</h1>
    </div>
  );
}

export default About;