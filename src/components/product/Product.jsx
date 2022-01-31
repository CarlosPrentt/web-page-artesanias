import React from "react";
import "./Product.css";

function Product({ product, cart, setCart }) {
  // const addCartBtn = document.querySelector( '#add-cart' );

  const addToCar = (product) => {
    const existProduct = cart.find((item) => item.id === product.id);
    if (existProduct) {
      const newCart = cart.map((item) => ({
        ...item,
        quantity: item.id === product.id ? item.quantity + 1 : item.quantity,
      }));
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-container" key={product.id}>
      <div className="product-img-container">
        <img className="product-img" src={product.img} alt="Producto" />
      </div>
      <div className="info-container">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-info">{product.info}</p>
        <span className="product-price">Precio: {product.price}</span>
        <button
          id="add-cart"
          className="add-cart"
          onClick={() => addToCar(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Product;
