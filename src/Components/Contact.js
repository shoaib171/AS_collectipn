/** @format */

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router-dom";
import ContactImg from "../Assests/contact.png";
const Contact = () => {
  const [state, handleSubmit] = useForm("moqzleao");
  if (state.succeeded) {
    return (
      <div className="container text-center mt-5 bg-white shadow-lg py-5">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="fs-5">Thanks for joining As_Collection!</p>
            <button className="btn btn-outline-dark">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Back_to home
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    );
  }
  // const [Form, SetForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",

  //   message: "",
  //   Type: false,
  // });
  // const handleChange = (e) => {
  //   SetForm((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const FormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(Form, "FormData");
  //   localStorage.setItem("Entries", JSON.stringify(Form));
  //   SetForm({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //     Type: "",
  //   });
  // };
  return (
    <div className="container mt-5 mb-2">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img
            src={ContactImg}
            className="d-block w-100"
            alt="Shopping_img"
            height="580px"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <form
            action="https://formspree.io/f/moqzleao"
            method="POST"
            className="row g-3"
            onSubmit={handleSubmit}
          >
            <div class="col-md-12">
              <label for="validationServer01" class="form-label">
                Enter name
              </label>
              <input
                name="name"
                type="text"
                className="form-control is-valid"
                id="validationServer01"
                // value={Form.name}
                // onChange={handleChange}
                required
              />
              <div className="valid-feedback">Enter valid name</div>
            </div>
            <div className="col-md-12">
              <label for="validationServer02" class="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control is-valid"
                id="validationServer02"
                // value={Form.email}
                // onChange={handleChange}
                required
              />
              <div className="valid-feedback">Enter valid email Address</div>
            </div>
            <div className="col-md-12">
              <label for="validationServer03" class="form-label">
                Phone
              </label>
              <input
                name="phone"
                type="number"
                className="form-control is-valid"
                id="validationServer03"
                // value={Form.phone}
                // onChange={handleChange}
                required
              />
              <div className="valid-feedback">Enter valid Phone</div>
            </div>

            <div class="col-md-12">
              <label for="validationTextarea" class="form-label">
                Textarea
              </label>
              <textarea
                name="message"
                className="form-control is-valid"
                id="validationTextarea"
                placeholder="Enter Message Here...."
                // value={Form.message}
                // onChange={handleChange}
                required
              ></textarea>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  name="Type"
                  className="form-check-input is-valid"
                  type="checkbox"
                  // value={Form.Type}
                  // onChange={() => {
                  //   SetForm((prevState) => ({
                  //     ...prevState,
                  //     Type: !Form.Type,
                  //   }));
                  // }}
                  id="invalidCheck3"
                  aria-describedby="invalidCheck3Feedback"
                  required
                />
                <label className="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div id="invalidCheck3Feedback" class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button
                className="btn btn-outline-dark"
                type="submit"
                disabled={state.submitting}
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
