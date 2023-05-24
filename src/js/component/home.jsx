import React from "react";
import Navbar from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cards from "./Cards";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="..">
			<Navbar/>
			<Jumbotron/>
			<div class="card-container">
				<Cards/>
				<Cards/>
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
