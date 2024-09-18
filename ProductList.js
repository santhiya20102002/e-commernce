// src/components/ProductList.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Fix path to context
import ProductCard from './ProductCard';


const products = [
  {
    id: 1,
    name: 'All in One 60W USB Fast Charging Travel Data Cable Set Type C, Lightening and Micro USB Port Inbuilt Mobile Stand Compatible with i, i-Pad, Samsang, RealMi & All Other Android Phones',
    price: 110,
    image: 'https://m.media-amazon.com/images/I/61W5WyvOLjL._AC_UL480_FMwebp_QL65_.jpg'  // Example product image
  },
  {
    id: 2,
    name: 'Fastrack Fpods FZ100 TWS in-Ear Earbuds with Mega 50 Hrs Playtime|Extra Deep Bass Driver|Quad Mic ENC for Clear Calls|Ultra Low 40ms Latency Gaming Mode|NitroFast Charge-200 Min in 10 Min-Black',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/61vA1oin15L._AC_UL480_FMwebp_QL65_.jpg'  // Example product image
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71VJNAUhLPL._AC_UL480_FMwebp_QL65_.jpg',
    price: 1895,
    name: 'GoTrippin Weight Machine for Luggage - 50 kg capacity, Steel body, Lifetime replacement - Digital Portable Electronic Luggage Weighing Scale for home, travel, flights, bags and baggage (Silver, 50 kg)'  // Example product image
  },
  {
    id: 4,
    name: 'GoTrippin Weight Machine for Luggage - 50 kg capacity, Steel body, Lifetime replacement - Digital Portable Electronic Luggage Weighing Scale for home, travel, flights, bags and baggage (Silver, 50 kg)',
    price: 699,
    image: 'https://m.media-amazon.com/images/I/71VudJ25xEL._SL1500_.jpg'  // Example product image
  },
  {
    id: 5,
    name: 'Alarm clock, digital clock, table clock for Students, watch timer for study, Home, Office, Bedroom, kitchen, loud desk alarm clocks for heavy sleepers with Automatic Sensor, Time, Date & Temperature',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/41FKYv8eI+L._SX300_SY300_.jpg'  // Example product image
  },
  {
    id: 6,
    name: 'ELV Mobile Phone Mount Tabletop Holder for Phones and Tablets - Black',
    price: 59,
    image: 'https://m.media-amazon.com/images/I/61RGJpcuU0L._SY679_.jpg'  // Example product image
  }
];
const ProductList = () => {
  

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};




export default ProductList;
