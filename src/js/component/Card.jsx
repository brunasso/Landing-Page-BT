import React from "react";

//create your first component
const Card = () => {
	return (
		<div className="card col-12 col-md-3 mb-4 border-0" style={{width: "18rem"}}>
			<img src="https://placehold.co/530x325" className="card-img-top" alt="..."/>
			<div className="card-body text-center">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>		
		</div>	
	);
};

export default Card;
