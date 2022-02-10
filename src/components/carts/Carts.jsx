import React from "react";
import Card from "components/card/Card";
// import { data } from "data/data";
import "./Carts.css";

const Carts = ({ cart = [], setCart }) => {

  const sendOrder = (productsCart) => {
    const productos = productsCart.map((product, index) => `${product.name}  Cantidad:${product.quantity}%0A`).join('')
    const totalCart = productsCart.reduce((total, item) => total += (item.price * item.quantity), 0);

    const phoneWa = '573053194329'
    const url = `https://api.whatsapp.com/send?phone=${phoneWa}&text=Hola, Bienvenido a Moulé Artesanías! 🍬🎉🎈%0ATus productos son:%0A══════════════════%0A${productos}══════════════════%0AIngresa tu dirección: %0A*TOTAL:* $${totalCart}`;

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
