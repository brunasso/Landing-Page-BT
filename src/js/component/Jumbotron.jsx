import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-body-tertiary rounded-3 d-flex justify-content-center">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className=" fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
				<button className="btn btn-primary btn-lg" type="button">Example button</button>
			</div>
		</div>
	);
};

export default Jumbotron;
