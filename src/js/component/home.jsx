import React from "react";
//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"
//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="d-flex align-items-center flex-column min-vh-100">
				<div className="w-75 justify-content-center">
					<Jumbotron/>
					<div className="row justify-content-evenly">
						<Card/>
						<Card/>
						<Card/>
						<Card/>				
					</div>
				</div>
				
			</div>
			<Footer/>
		</>
		
	);
};

export default Home;
