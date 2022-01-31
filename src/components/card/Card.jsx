import React from "react";
import "./Card.css";
// import { data } from 'data/data';

function Cart({ product, cart, setCart }) {

  const removeItem = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  

  return (
    <div className="product-info-contain" key={product.id}>
      <p className="p-control">{product.name}</p>
      <div className="img-container">
        <img className="image" src={product.img} alt="" />
      </div>
      <p className="p">
        <span className="price">PRECIO: </span>${product.price}
      </p>
      <div className="delete-value-container">
        <input
          className="number-plus"
          type="number"
          placeholder="N°"
          value={product.quantity}
        />
        <i className="fas fa-times-circle x-icon" onClick={removeItem} />
      </div>
    </div>
  );
}

export default Cart;
