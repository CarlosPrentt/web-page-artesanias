import React from "react";
import { Link } from "react-router-dom";
import "./Topitos.css";

const Topitos = () => {
  return (
    <div className="topitos-container">
      <div className="topitos-text-container">
      <Link to="/products">
        <span className="topitos-title">Productos</span>
      </Link>
        <span className="topitos-subtitle">TOPITOS</span>

        <div className="images-container">
          <div className="apple-image-container">
            <img className="apple-image" src="assets/img/TMANZANAS.jpg" alt=""/>
          </div>

          <div className="cat-kirbi-container">

            <img className="cat-image" src="assets/img/TGATITOS.jpg" alt="" />
            <img className="kirbi-image" src="assets/img/Tkirbi.jpg" alt="" />

          </div>
        </div>
        

            <span className="surprise-paragraph">Sorprende a los que quieres</span>
            <span className="surprise-paragraph2">con algo especial</span>
            
      </div>
      <a href="#home" className="home">Inicio...</a>
    </div>
  );
};

export default Topitos;
