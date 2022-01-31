import React from "react";
import { Link } from "react-router-dom";
import "./keychains.css";

const Keychains = () => {

  

  return (
    <div id="keychains" className="keychains-container">
      <div className="keychains-text-container">
      <Link to="/products">
        <span className="topitos-title">Productos</span>
      </Link>
        <span className="keychains-subtitle">ARETES</span>
      </div>

      <div className="keychains-images-container">
        <div className="cookie-container">
          <img className="cookie-image" src="assets/img/LCOOKIE.jpg" alt="" />
        </div>
        <div className="kirbikey-container">
          <img className="kirbikey-image" src="assets/img/LKIRBI.jpg" alt="" />
        </div>
        <div className="clown-container">
          <img className="clown-image" src="assets/img/LCLOWN.jpg" alt="" />
        </div>
      </div>
      <div className="keychain-span-container">
        <span className="keychain-span">Accesorios únicos como tú!</span>
      </div>
    </div>
  );
};

export default Keychains;
