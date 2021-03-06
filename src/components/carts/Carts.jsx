import React from "react";
import Card from "components/card/Card";
// import { data } from "data/data";
import "./Carts.css";

const Carts = ({ cart = [], setCart }) => {

  const sendOrder = (productsCart) => {
    const productos = productsCart.map((product, index) => `${product.name}  Cantidad:${product.quantity}%0A`).join('')
    const totalCart = productsCart.reduce((total, item) => total += (item.price * item.quantity), 0);

    const phoneWa = '573053194329'
    const url = `https://api.whatsapp.com/send?phone=${phoneWa}&text=Hola, Bienvenido a MoulΓ© ArtesanΓ­as! π¬ππ%0ATus productos son:%0Aββββββββββββββββββ%0A${productos}ββββββββββββββββββ%0AIngresa tu direcciΓ³n: %0A*TOTAL:* $${totalCart}`;

    window.open(url);
   
}
  return (
    <div id="cart" className="product-box">
      <div className="product-containerr">
        {cart.map((item) => (
          <Card key={item.id} product={item} cart={cart} setCart={setCart} />
        ))}
      </div>
      <div className="btn-container">
        <button
          id="empty-cart"
          className="empty-cart"
          onClick={() => setCart([])}
        >
          Vaciar carrito
        </button>
        <button className="send-products" onClick={ () => sendOrder(cart)}>Enviar</button>
      </div>
    </div>
  );
};

export default Carts;
