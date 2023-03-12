/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Products = () => {
  const [data, setData] = useState([]);
  const [Filter, setFilter] = useState();
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;

  useEffect(() => {
    const GetProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (ComponentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(Filter, "Filter");
      }

      return () => {
        ComponentMounted = false;
      };
    };
    GetProducts();
  }, []);
  const FilterProduct = (cart) => {
    const updatedList = data.filter((x) => x.category === cart);
    setFilter(updatedList);
  };
  const Loaded = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="  col-lg-12 col-md-12 col-sm-12 m-sm-2  col-xs-12  buttons  mb-5 pb-5">
              <button
                className="btn btn-outline-dark me-2 m-2"
                onClick={() => setFilter(data)}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => FilterProduct("men's clothing")}
              >
                Men's clothing
              </button>
              <button
                className="btn btn-outline-dark me-2  "
                onClick={() => FilterProduct("women's clothing")}
              >
                Women's clothing
              </button>
              <button
                className="btn btn-outline-dark me-2  "
                onClick={() => FilterProduct("jewelery")}
              >
                Jewelry
              </button>
              <button
                className="btn btn-outline-dark me-1 m-1 "
                onClick={() => FilterProduct("electronics")}
              >
                Electronics
              </button>
            </div>

            {Filter?.map((product, index) => {
              console.log(product, "product");
              return (
                <>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div
                      className="card h-100 text-center p-4"
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title  mb-0">
                          {product.title.substring(0, 12)}...
                        </h5>
                        <p className="card-text lead fw-bold">
                          ${product.price}
                        </p>
                        <NavLink
                          to={`/productDetail/${product.id}`}
                          className="btn btn-outline-dark"
                        >
                          BuyNow
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest_Products</h1>
            <hr />
          </div>
        </div>

        {loading ? <Loaded /> : <ShowProducts />}
      </div>
    </div>
  );
};
export default Products;
