import React from "react";
import Prodcut from "../components/product";
import data from "../data";
function HomeScreen(props) {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Prodcut key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
