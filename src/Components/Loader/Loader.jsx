import React from 'react';
import img from "../../images/loader-icon.png";

function Loader() {
  return (
    <div className="loader">
      <img src={img} alt="" />
    </div>
  );
}

export default Loader;