/** @format */

import React from "react";

import BgIMG1 from "../Assests/img2.jpg";
import BgIMG2 from "../Assests/img1.jpg";
import BgIMG3 from "../Assests/img3.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={BgIMG1}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
            <div className="carousel-caption  d-md-block col-sm">
              <h2 className="fw-bold fs-1">Flat_25% OFF on Entire Stock</h2>
              <p className="fw-bolder">
                Let's Enjoy Your Summer Collection with A&S
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={BgIMG2}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
            <div className="carousel-caption  d-md-block col-sm">
              <h2 className="fw-bold fs-1"> Flat_25% OFF on Entire Stock</h2>
              <p className="fw-bolder">
                Let's Enjoy Your Summer Collection with A&S
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={BgIMG3}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
            <div className="carousel-caption  d-md-block col-sm">
              <h2 className="text-dark fw-bold fs-1">
                Flat_25% OFF on Entire Stock
              </h2>
              <p className="text-dark fw-bolder">
                Let's Enjoy Your Summer Collection with A&S
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />;
    </div>
  );
};

export default Home;
