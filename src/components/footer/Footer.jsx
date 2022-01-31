import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div id="social" className="social-networks-container">
        <a href="https://instagram.com/moule.art?utm_medium=copy_link">
          <i className="fab fa-instagram instagram-icon"></i>
        </a>
        <a href="https://wa.me/message/YFZ4EVUXFNNGJ1">
          <i className="fab fa-whatsapp whatsapp-icon"></i>
        </a>
        <a href="https://www.canva.com/design/DAEfoFSE_-c/lI-txWb04N_MoZqijCOPkw/view">
          <i className="far fa-images catalog-icon fab"></i>
        </a>
      </div>
      <a href="#home" className="home">Inicio...</a>

    
    </footer>
  );
};

export default Footer;
