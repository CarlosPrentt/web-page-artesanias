import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/home/Home';
import Carts from 'components/carts/Carts';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Products from 'components/products/Products';

function App() {

  
  const dataCart = JSON.parse(localStorage['cart'] || '[]');
  
  const [cart, setCart] = useState(dataCart);


  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart))
   
  }, [cart]);


  return (
    <Router>
      <Header cartItems={cart.length} />
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" >
          <Carts cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/products" >
          <Products cart={cart} setCart={setCart} />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
