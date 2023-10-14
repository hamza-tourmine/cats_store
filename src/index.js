import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './Components/Home';
import Product from './Components/Products';
import Cart from './Components/Cart.js';
import Details from './Components/Details';
import { Mycontext } from './Context/Context';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [addToCart, setAddToCart] = useState({id:'',type:false});

  return (
    <React.StrictMode>
         <Mycontext.Provider value={{ addToCart, setAddToCart }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path='/products' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
     
          <App />
      
      </BrowserRouter>
      </Mycontext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
reportWebVitals();
