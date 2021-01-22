import React from "react";
import Rating from "./rating";
import { Link } from "react-router-dom";
function Prodcut({ product }) {
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt="product" />
      </Link>
      <div className="card-body">
        <Link to="product.html">
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="=price">${product.price}</div>
      </div>
    </div>
  );
}

export default Prodcut;
