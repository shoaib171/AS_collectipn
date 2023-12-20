import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [registrationSuccess, setRegistrationSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const result = await axios.post('http://localhost:5000/signup', {
				name: formData.name,
				email: formData.email,
				password: formData.password,
			});

			console.log(result);
			setRegistrationSuccess(true);

			// Clear the form fields after submission
			setFormData({
				name: '',
				email: '',
				password: '',
			});

			// Redirect to SignIn page after a brief delay (optional)
			setTimeout(() => {
				navigate('/SignIn');
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	const handleFormFields = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="RegisterContainer container mt-5 shadow-lg bg-light py-5 rounded-4 w-25">
				{registrationSuccess && (
					<div
						className="alert alert-success mt-3"
						role="alert">
						You Successfully Register
					</div>
				)}

				<div className="row">
					<div className="col-12">
						<h3 className="text-center">Register</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<form onSubmit={handleSubmit}>
							<label className="form-label fw-bold">Name</label>
							<input
								name="name"
								value={formData.name}
								onChange={handleFormFields}
								type="text"
								className="form-control"
								placeholder="Enter name"
								required
							/>
							<label className="form-label fw-bold">Email</label>
							<input
								name="email"
								value={formData.email}
								onChange={handleFormFields}
								type="email"
								className="form-control"
								placeholder="Enter Email"
								required
							/>
							<label className="form-label fw-bold">Password</label>
							<input
								name="password"
								value={formData.password}
								onChange={handleFormFields}
								type="password"
								className="form-control"
								placeholder="Enter Password"
								required
							/>
							<button
								type="submit"
								className="btn btn-outline-dark bg-success border-0 mt-3 w-100 fw-bold">
								Register
							</button>

							<label className="form-check-label mt-1">Already have an account</label>
							<Link
								to="/SignIn"
								className="btn bg-secondary border-0 mt-1 w-100 fw-bold">
								Login
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
