import React from "react";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="buttons-container">
      <div className="p-s-container">

        <div className="star-icon-container">
          <a href="#handi"><i className="fas fa-splotch star.icon"></i></a>
          <span className="icon-text">Topitos</span>

        </div>
        <div className="div paw-icon-container">

          <a href="#earrings"><i className="fas fa-paw paw-icon"></i></a>
          <span className="icon-text">Aretes</span>

        </div>
      </div>
      <div className="key-container">

        <a href="#keychains"><i className="fas fa-key"></i></a>
        <span className="icon-text">Llaveros</span>

      </div>
    </div>
  );
};

export default Buttons;
