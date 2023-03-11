/** @format */

import React from "react";
import { ADD_ITEM, DELETE_ITEM } from "../Redux/action/Action";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();

  const HandleCart = useSelector((state) => state.HandleCart);

  const CartItem = (product) => {
    return (
      <div className="container mt-3 shadow-sm py-2">
        <div className="row py-2">
          <div className="col-3 ">
            <img
              src={product.image}
              width={"80px"}
              height={"80px"}
              alt={product.title}
            />
          </div>
          <div className="col-3 ">
            <h3>{`${product.title.substring(0, 18)}...`}</h3>
          </div>
          <div className="col-4">
            <p className="lead fw-bold">
              {product.qty} X $ {product.price}=$
              {product.qty * product.price}
            </p>
          </div>

          <div className="col-2">
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => HandleButton(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => HandleButton(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
  const HandleButton = (product) => {
    dispatch(ADD_ITEM(product.qty));
    dispatch(DELETE_ITEM(product.id));
  };
  const CartMessage = () => {
    return (
      <>
        <div className="container text-center mt-5 bg-white shadow-lg py-5">
          <div className="row ">
            <div className="col-12">
              <p className="fw-bold text-danger color-red fs-3">
                Not Any product.. Cart is Empty
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {HandleCart.length !== 0 && HandleCart.map(CartItem)}
      {HandleCart.length === 0 && <CartMessage />}
    </>
  );
};

export default Cart;
