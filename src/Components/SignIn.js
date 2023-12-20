import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../Redux/action/Action';
import { useDispatch } from 'react-redux';
const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/login', {
				email: loginData.email,
				password: loginData.password,
			})
			.then((result) => {
				if (result.status === 200) {
					dispatch(loginSuccess({ email: loginData.email }));
					navigate('/Cart');
				} else {
					setError('Email not found');
				}
			})
			.catch((error) => {
				console.log(error);
				setError('An error occurred. Please try again.');
			});

		// Clear the form fields after submission
		setLoginData({
			email: '',
			password: '',
		});
	};

	const handleFieldData = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
		setError(''); // Clear error when the user types in the input fields
	};

	return (
		<>
			<div className="RegisterContainer container mt-5 shadow-lg bg-light py-5 rounded-4 w-25">
				<div className="row">
					<div className="col-12 ">
						<h3 className="text-center ">Login</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<form onSubmit={handleSubmit}>
							<label className="form-label fw-bold">Email</label>
							<input
								name="email"
								value={loginData.email}
								onChange={handleFieldData}
								type="email"
								className="form-control"
								placeholder="Enter Email"
								required
							/>
							<label className="form-label fw-bold">Password</label>
							<input
								name="password"
								value={loginData.password}
								onChange={handleFieldData}
								type="password"
								className="form-control"
								placeholder="Enter Password"
								required
							/>

							{error && <p style={{ color: 'red' }}>{error}</p>}

							<button
								type="submit"
								className="btn btn-outline-dark bg-success border-0 mt-3 w-100 fw-bold ">
								Login
							</button>

							<NavLink
								className="nav-link active mt-2 "
								aria-current="page"
								to="/register">
								Create new Account
							</NavLink>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
