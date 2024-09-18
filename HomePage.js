// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <h1 style={{color:"whitesmoke"}}>Happy Shopping!</h1> */}
      <ProductList />
    </div>
  );
};

export default HomePage;
