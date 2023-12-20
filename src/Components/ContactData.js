import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearContact } from '../Redux/action/Action';

const ContactData = () => {
	const dispatch = useDispatch();
	const handleClearContact = () => {
		dispatch(clearContact());
	};

	// const contactData = useSelector((state) => state.ContactReducers.contactData);
	// console.log(contactData, 'Contact');

	const contactDataList = useSelector((state) => state.ContactReducers.contactDataList);
	console.log(contactDataList, 'Contact--List');

	return (
		<div className="container mt-5">
			<h2>Contact Data</h2>
			<NavLink to="/contact">
				<button className="btn btn-outline-dark">Back</button>
			</NavLink>

			{contactDataList.length > 0 ? (
				<>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Phone</th>
								<th scope="col">Message</th>
							</tr>
						</thead>
						<tbody>
							{contactDataList.map((contact, index) => (
								<tr key={index}>
									<td>{contact.name}</td>
									<td>{contact.email}</td>
									<td>{contact.phone}</td>
									<td>{contact.message}</td>
								</tr>
							))}
						</tbody>
					</table>
					<button
						className="btn btn-outline-dark"
						onClick={handleClearContact}>
						Clear Contact Data
					</button>
				</>
			) : (
				<>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<p>No contact data available</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ContactData;
