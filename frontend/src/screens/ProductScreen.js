import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/product";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetail = useSelector((state) => state.productDetail);
  console.log(productDetail, "list");
  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [productId]);
  // const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>No product sprry!</div>;
  }
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top">
          <Link to="/">back to result</Link>
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <li>
                Description:
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
