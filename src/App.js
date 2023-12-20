/** @format */

import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import { useSelector } from 'react-redux';
import ContactData from './Components/ContactData';
function App() {
	const isAuthenticated = useSelector((state) => state.AuthReducer.isAuthenticated);
	const MessageShow = () => {
		return (
			<>
				<div className="container text-center mt-5 bg-white shadow-lg py-5">
					<div className="row ">
						<div className="col-12">
							<p className="fw-bold text-danger color-red fs-3">please login to continue.....</p>
						</div>
					</div>
				</div>
			</>
		);
	};
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/Cart"
					element={!isAuthenticated ? <MessageShow /> : <Cart />}
				/>
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/productDetail/:id"
					element={<ProductDetail />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/contactdata"
					element={<ContactData />}
				/>

				<Route
					path="/SignIn"
					element={<SignIn />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
			</Routes>
		</div>
	);
}

export default App;
