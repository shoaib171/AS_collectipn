import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/action/Action';
import Contact from './Contact';
import { clearCart } from '../Redux/action/Action';
const Navbar = () => {
	const isAuthenticated = useSelector((state) => state.AuthReducer.isAuthenticated);
	const HandleCart = useSelector((state) => state.HandleCart);
	const dispatch = useDispatch();
	const [IsOpen, setOpen] = useState(false);
	const ModalOpen = () => {
		setOpen(true);
	};
	const ModalClose = () => {
		setOpen(false);
	};
	const handleLogout = () => {
		dispatch(logout());
		dispatch(clearCart());
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top ">
				<div className="container ">
					<NavLink
						className="navbar-brand fw-bold fs-4 "
						to="/">
						AS_Collection
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
							<li className="nav-item">
								<NavLink
									className="nav-link "
									aria-current="page"
									to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link "
									aria-current="page"
									to="/products">
									Products
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link "
									aria-current="page"
									to="/about">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className={`nav-link ${IsOpen ? 'active' : ''}`}
									aria-current="page"
									onClick={ModalOpen}>
									Contact
								</NavLink>
							</li>
						</ul>

						<div className="buttons">
							{isAuthenticated ? (
								<NavLink
									to="/"
									className="btn btn-outline-dark ms-2"
									onClick={handleLogout}>
									<i className="fa fa-sign-out me-2"></i>
									Logout
								</NavLink>
							) : (
								<NavLink
									to="/SignIn"
									className="btn btn-outline-dark ms-2">
									<i className="fa fa-sign-in me-2"></i>
									Login
								</NavLink>
							)}

							<NavLink
								to="/Cart"
								className="btn btn-outline-dark ms-2">
								<i className="fa fa-cart-plus me-2"></i>
								Cart ({HandleCart.length})
							</NavLink>
						</div>
					</div>
				</div>
			</nav>

			{IsOpen && (
				<div
					className="modal"
					tabIndex="-1"
					role="dialog"
					style={{ display: 'block' }}>
					<div
						className="modal-dialog modal-lg"
						role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Contact Form</h5>
								<button
									type="button"
									className="btn-close"
									onClick={ModalClose}
									aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<Contact ModalClose={ModalClose} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
