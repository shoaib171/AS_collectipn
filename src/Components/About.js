/** @format */

import React from "react";
import AboutImg from "../Assests/about.png";
import Ab1 from "../Assests/ab1.jpg";
import Ab2 from "../Assests/ab2.png";
import Ab3 from "../Assests/ab3.png";

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row bg-white shadow-sm py-5 ">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
          <img
            src={AboutImg}
            alt="company about"
            className="d-block w-100"
            height={"300px"}
          />
        </div>
        <div className="col-lg-6 col-md-12 text-justify  col-sm-12 col-xs-12 mt-2 ">
          <p className="text-justify ">
            AS Collection,Is an Online shopping store which your provide Men's
            Women's Jewelry or electronic eCommerce, is the buying and selling
            of goods or services over the internet or throughout the pakistan.
            It involves a wide range of activities, including the development,
            promotion, and sale of products or services, as well as the
            processing of payments and the secure transfer of data. commerce has
            revolutionized the way businesses and consumers interact by
            providing a more convenient, cost-effective, and faster way to
            conduct business. As a result, commerce has become an integral part
            of the economy, with businesses of all sizes leveraging it to reach
            new customers, increase sales, and streamline operations.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <h1 className="text-center ">About AS_Collection</h1>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3">
          <p className="text-center shadow-lg p-5 ">
            About is an important page on any eCommerce online store such as you
            chose AS Collection. It is the page where customers can learn more
            about the company and its products and services. It should be
            informative, concise, and engaging. It should include the company’s
            mission statement, a brief history of the company, a list of
            products and services, and contact information. Additionally, the
            page should include details such as the company’s core values,
            vision, and any special offers or discounts. Finally, the page
            should include customer testimonials and reviews, so customers can
            get a better sense of the company and its products and services.
            This page should be kept up-to-date and regularly updated to ensure
            customers get the latest information.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3">
          <div className="w-70">
            <img
              src={Ab2}
              alt="company about"
              className="d-block w-100 rounded-1"
              height={"200px"}
            />
          </div>
          <div className=" mt-2">
            <img
              src={Ab3}
              alt="company about"
              className="d-block w-100 rounded-1"
              height={"200px"}
            />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3 ">
          <div className="shadow-sm p-3">
            <img
              src={Ab1}
              alt="company about"
              className="d-block w-100 rounded-1"
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
