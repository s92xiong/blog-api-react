import React from 'react';
import "./Styles/Sidebar.css";
import img from "../../images/self-img.jpeg";

function Sidebar() {
  return (
    <section className="sidebar">
      <img className='self-img' src={img} alt="" />
      <div className="about-sidebar">
        <h3>Sheuh Xiong</h3>
        <p>Software Developer with experience in MongoDB, Express, React, and Node. I previously worked on building i-Sight, a case management platform for corporate investigations</p>
      </div>
    </section>
  );
}

export default Sidebar;