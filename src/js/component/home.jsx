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
			<Jumbotron/>
			<div className="row justify-content-around">
				<Card/>
				<Card/>
				<Card/>
				<Card/>				
			</div>
			<Footer/>
		</>
		
	);
};

export default Home;
