/** @format */

import React from 'react';

const Services = () => {
	return (
		<div className="container py-2">
			<div className="row">
				<div className=" Services--part col-lg-4 col-md-3 col-sm-12 shadow-sm py-5 mt-2 text-center ">
					<div className="mt-5">
						<i className="fa fa-truck fs-2"></i>
						<h5 className="fw-bold"> Super Fast and Free Delivery</h5>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 text-center ">
					<span className="Services--Mid d-flex justify-content-center mt-2 py-5">
						<i class="fa fa-ship fs-2"></i>
						<h5 className="fw-bold ms-1">Non-contact Shipping</h5>
					</span>
					<span className="Services--Mid d-flex justify-content-center py-5 mt-2">
						<i class="fa fa-money fs-2"></i>
						<h5 className="fw-bold ms-1">Money-back Guaranteed</h5>
					</span>
				</div>

				<div className="Services--part  col-lg-4 col-md-3 col-sm-12 shadow-sm mt-2 py-5 text-center">
					<div className="mt-5">
						<i class="fa fa-credit-card fs-2"></i>
						<h5 className="fw-bold ">Super Secure Payment System</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
