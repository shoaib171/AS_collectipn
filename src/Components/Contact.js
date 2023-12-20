/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import { addContact } from '../Redux/action/Action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Contact = ({ ModalClose }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [registrationSuccess, setRegistrationSuccess] = useState(false);

	const [Form, SetForm] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		Type: false,
	});

	const FormSubmit = async (e) => {
		e.preventDefault();
		console.log(Form, 'FormData');
		try {
			const result = await axios.post('http://localhost:5000/contact', {
				name: Form.name,
				email: Form.email,
				phone: Form.phone,
				message: Form.message,
			});
			console.log(result, 'APIDATA');
			setRegistrationSuccess(true);
			dispatch(addContact(result.data));
			setTimeout(() => {
				ModalClose();
			}, 1000);
		} catch (error) {
			console.log(error);
		}

		SetForm({
			name: '',
			email: '',
			phone: '',
			message: '',
			Type: '',
		});
		navigate('/contactdata');
	};
	const handleChange = (e) => {
		SetForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<div className="modal-dialog modal-lg"></div>
			{registrationSuccess && (
				<div
					className="alert alert-success mt-3"
					role="alert">
					Submit Form Successfully!
				</div>
			)}
			<div className="container mt-5 mb-2">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<form
							action=""
							method="POST"
							className="row g-3"
							onSubmit={FormSubmit}>
							<div class="col-md-12">
								<label
									for="validationServer01"
									class="form-label">
									Enter name
								</label>
								<input
									name="name"
									type="text"
									className="form-control is-valid"
									id="validationServer01"
									value={Form.name}
									onChange={handleChange}
									required
								/>
								<div className="valid-feedback">Enter valid name</div>
							</div>
							<div className="col-md-12">
								<label
									for="validationServer02"
									class="form-label">
									Email
								</label>
								<input
									name="email"
									type="email"
									className="form-control is-valid"
									id="validationServer02"
									value={Form.email}
									onChange={handleChange}
									required
								/>
								<div className="valid-feedback">Enter valid email Address</div>
							</div>
							<div className="col-md-12">
								<label
									for="validationServer03"
									class="form-label">
									Phone
								</label>
								<input
									name="phone"
									type="number"
									className="form-control is-valid"
									id="validationServer03"
									value={Form.phone}
									onChange={handleChange}
									required
								/>
								<div className="valid-feedback">Enter valid Phone</div>
							</div>

							<div class="col-md-12">
								<label
									for="validationTextarea"
									class="form-label">
									Textarea
								</label>
								<textarea
									name="message"
									className="form-control is-valid"
									id="validationTextarea"
									placeholder="Enter Message Here...."
									value={Form.message}
									onChange={handleChange}
									required></textarea>
								<div class="invalid-feedback">Please enter a message in the textarea.</div>
							</div>
							<div class="col-12">
								<div class="form-check">
									<input
										name="Type"
										className="form-check-input is-valid"
										type="checkbox"
										value={Form.Type}
										onChange={() => {
											SetForm((prevState) => ({
												...prevState,
												Type: !Form.Type,
											}));
										}}
										id="invalidCheck3"
										aria-describedby="invalidCheck3Feedback"
										required
									/>
									<label
										className="form-check-label"
										for="invalidCheck3">
										Agree to terms and conditions
									</label>
									<div
										id="invalidCheck3Feedback"
										class="invalid-feedback">
										You must agree before submitting.
									</div>
								</div>
							</div>
							<div className="col-12">
								<button
									className="btn btn-outline-dark"
									type="submit"
									// disabled={state.submitting}
								>
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
