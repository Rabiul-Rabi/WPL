import React from 'react';
import myImage from '../image/key.png';

const Product = (props) => {
  return (
    <div className="product-card border border-gray-300 rounded-lg p-4 relative w-80 mx-auto mb-4">
      <div className="product-icons absolute top-2 left-2 flex flex-col">
        <span className="text-2xl">❤️</span>
        <span className="text-2xl">👁️</span>
      </div>

      <div className="product-discount absolute top-2 right-2 bg-red-500 text-white rounded-md p-1">
       {props.discount}
      </div>

      <img className="product-image max-w-full h-auto block mx-auto" src={props.imageUrl} alt="My Image" />
      <button className="add-to-cart-button bg-black text-white border-none px-3 py-2 mt-2 w-full rounded-md hover:bg-gray-800">
        Add to Cart
      </button>
      <div className="product-name text-left mt-2 font-semibold">
        {props.name}
      </div>
      <div className="product-price text-left font-bold mt-2">
        ${props.price}
      </div>

      <div className="product-rating text-left mt-2 text-yellow-500">
        ★★★★☆
      </div>
    </div>
  );
};

export default Product;
