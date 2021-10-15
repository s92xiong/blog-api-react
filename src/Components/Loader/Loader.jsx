import React from 'react';
import "./Styles/Loader.css";
import img from "../../images/loading-icon.png";

function Loader() {
  return (
    <div className="loader-container">
      <img className="loader rotating" src={img} alt="" />
    </div>
  );
}

export default Loader;