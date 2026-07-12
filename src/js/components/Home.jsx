import React from "react";
import logo from "../../img/react-logo.png"

const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">React Template</h1>
			<img src={logo} id="the-logo"></img>
		</div>
	);
};

export default Home;