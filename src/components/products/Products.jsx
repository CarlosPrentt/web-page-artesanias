import React from 'react';
import Product from 'components/product/Product';
import { data } from 'data/data';
import './Products.css';
// import Cart from 'components/cart/Cart';

const Products = ({cart,setCart}) => {
   
    return (
        <div className="products-general-container">
        <span className="products-text">Productos</span>
        <div className="products-container">
            {
          data.map(item => <Product key={item.id} product={item} cart={cart} setCart={setCart}/>)
            };
        </div>
        </div>
    );
}

export default Products;
