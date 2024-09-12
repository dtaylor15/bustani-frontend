import { useEffect, useState } from "react";

function App() {
	const [plants, setPlants] = useState(null);
	useEffect(() => {
		const makeAPICall = async () => {
			const res = await fetch(`http://localhost:3001/plants`);
			const data = await res.json();
			setPlants(data.plants);
		};
		makeAPICall();
	}, []);

	if (!plants) {
		return <p>Loading...</p>;
	}
	return (
		<div className="App">
			<ul>
				{plants.map((plant) => {
					return (
						<li key={plant.id}>
							{plant.plantName} ({plant.sciName})
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
