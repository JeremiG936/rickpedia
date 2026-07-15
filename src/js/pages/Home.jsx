import React from "react";
import Card from "../components/Card";
import { getRandomIds } from "../functions/Misc.jsx";
import { getSettledPromises, fetchCharacterData } from "../functions/FetchData.jsx";

const randomIds = getRandomIds();
const settledPromises = await getSettledPromises(randomIds);

const Home = () => {
	return (
		<div className="p-4 d-flex flex-wrap justify-content-center">
			Home
			{/*{settledPromises.map(element => 
				<Card
					key={element.value.id}
					image={element.value.image}
					name={element.value.name}
					status={element.value.status}
					species={element.value.species}
					type={element.value.type ? element.value.type : "Unknown"}
					gender={element.value.gender}
					origin={element.value.origin.name}
					location={element.value.location.name}
				/>
			)} */}
		</div>		
	);
};

export default Home;