import React from "react";
import Card from "../components/Card";
import { getRandomIds } from "../functions/Misc";
import { getSettledPromised } from "../functions/FetchData";

const randomIds = getRandomIds();
const settledPromises = await getSettledPromised(randomIds);

const Home = () => {
	return (
		<div className="p-4 d-flex flex-wrap">
			{settledPromises.map(element => 
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
			)}
		</div>
	);
};

export default Home;