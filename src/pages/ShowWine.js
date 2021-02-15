import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ShowWine(props) {
	const [wine, setWine] = useState([]);
	//we are using useEffect so we can go grab some data that we need from the backend
	useEffect(() => {
		(async () => {
			try {
				console.log(props);
				const response = await fetch(
					'https://quiniwine.com/api/pub/wineKeywordSearch/' +
						props.match.params.id
				); //Just like req.params on the backend....The location of where that params is on the front end for react.
				const data = await response.json();
				console.log('props id', props.match.params.id);
				console.log('data from api', data);
				if (data.items.length > 1) {
					console.log('line 19', data.items[1]);
					setWine([...data.items[1]]);
				} else {
					setWine([...data.items]);
				}
				console.log(wine);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="MyFavs">
			{console.log('line 23', wine)}
			{wine.map(item => {
				return (
					<>
						<p>Name: {item.Name}</p>
						<p>Winery: {item.Winery}</p>
						<p>Vintage: {item.vintage}</p>
						<p>Varietal: {item.Varietal}</p>
						<p>Country: {item.Country}</p>
						<p>Province: {item.Province}</p>
					</>
				);
			})}
			<Link to={`/myfavs`}>
				<button>Back to Favs</button>
			</Link>
		</div>
	);
}
