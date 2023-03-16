/** @format */

import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/products" />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
