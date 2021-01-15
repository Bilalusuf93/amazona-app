import React, { useEffect, useState } from "react";
import axios from "axios";

import Prodcut from "../components/product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProdcuts } from "../actions/product";

function HomeScreen(props) {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // console.log(productList, "list");
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProdcuts());
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("/api/products");
    //     setError(false);
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Prodcut key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
