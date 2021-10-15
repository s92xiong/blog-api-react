import React from 'react';
import "./Styles/Sidebar.css";
import img from "../../images/img-icon.png";

function Sidebar() {
  return (
    <section className="sidebar">
      <img src={img} alt="" />
      <div className="about-sidebar">
        <h3>Sheuh Xiong</h3>
        <p>Full Stack Developer currently learning and building projects via The Odin Project. Sharing my interests and experiences through this blog.</p>
      </div>
    </section>
  );
}

export default Sidebar;