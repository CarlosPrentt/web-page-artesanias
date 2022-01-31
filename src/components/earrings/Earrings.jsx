import React from "react";
import { Link } from "react-router-dom";
import "./Earrings.css";

const Earrings = () => {
  return (
    <div id="earrings" className="earrings-container">
      <div className="earrings-text-container">
      <Link to="/products">
        <span className="topitos-title">Productos</span>
      </Link>
        <span className="earrings-subtitle">ARETES</span>

        <div className="bat-earrings-container">
          <div className="bat-image-container">
            <img className="bat-image" src="assets/img/AMURCIELAGOS.jpg" alt=""/>
          </div>
        </div>
          <div className="controls-ladybug-container">
            <img className="controls-image" src="assets/img/ACONTROLES.jpg" alt="" />
            <img className="ladybug-image" src="assets/img/AMARIQUITAS.jpg" alt="" />
          </div>
        

        <span className="accesories-paragraph">Accesorios únicos como tú!</span>
      </div>
      <a href="#home" className="home">Inicio...</a>
    </div>
  );
};

export default Earrings;
