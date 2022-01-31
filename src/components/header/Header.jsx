import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({cartItems}) {
  return (
    <header className="header-container">
      <div id="home" className="header">
        <div className="icon-car-container">
          <span className="counter-cart">{cartItems}</span>
          <Link to="/cart">
            <i className="fas fa-shopping-cart buy-icon" />
          </Link>
          <span className="icon-text-car">Ver Carrito</span>
        </div>

        <Link to="/">
          <img className="logo-img" src="assets/img/whitelogo.jpg" alt="logo" />
        </Link>
        <i
          className="fas fa-ellipsis-v dots-icon"
          onClick={(showMenu) => {
            const menu = document.querySelector("#menu");
            menu.classList.toggle("show-menu");
          }}
        ></i>
      </div>

      <div id="menu" className="dots-menu-cotainer">
        <div className="dots-menu">
          <a className="link-menu1" href="#home"
            onClick={(showMenu2) => {
              const menu2 = document.querySelector("#menu");
              menu2.classList.toggle("show-menu");
            }}>Inicio</a>
          <a
            className="link-menu2"
            href="#social"
            onClick={(showMenu3) => {
              const menu3 = document.querySelector("#menu");
              menu3.classList.toggle("show-menu");
            }}
          >
            Redes sociales
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
