/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../Redux/action/Action";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const GetProductsDetail = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
      console.log(product, "ProductID");
    };

    GetProductsDetail();
  }, []);
  const dispatch = useDispatch();
  const AddProduct = (product) => {
    // alert("Button clicked");
    dispatch(ADD_ITEM(product));
  };

  const Loading = () => {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Skeleton height={400} />
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{ lineHeight: 2 }}
          >
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} />
          </div>
        </div>
      </div>
    );
  };
  const ShowProducts = () => {
    return (
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-lg-5 col-md-6 cols-m-12 col-xs-12">
            <img
              src={product.image}
              alt="Detail_image"
              height="400px"
              width="350px"
            />
          </div>
          <div className="col-lg-7 col-md-6 cols-m-12 col-xs-12 w-80">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="d-6 fw-bold my-4">$ {product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => AddProduct(product)}
            >
              Add to cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 py-2 px-4 ">
              Go to cart
            </NavLink>
            <NavLink
              to="/products"
              className="btn btn-outline-dark ms-1 py-2 px-4 mt-1 "
            >
              Back to products
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return <>{loading ? <Loading /> : <ShowProducts />}</>;
};

export default ProductDetail;
