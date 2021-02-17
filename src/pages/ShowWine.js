import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function ShowWine(props) {
	const [wine, setWine] = useState([]);

	//we are using useEffect so we can go grab some data that we need from the backend
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/wines/${props.match.params.id}`); //Just like req.params on the backend....The location of where that params is on the front end for react.
				const data = await response.json();
				console.log(data);
				setWine([data]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/wines/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/myfavs');
		}
	};

	return (
		<div className="MyFavs">
			<NavBar routes={routes} />
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
						<p>My Tasting Notes: {item.MyTastingNotes}</p>
						<button onClick={handleDelete}>Delete</button>
						<Link to={`/${item._id}/edit`}>
							<button>Edit Tasting Notes</button>
						</Link>
					</>
				);
			})}
			<Link to={`/myfavs`}>
				<button>Back to Favs</button>
			</Link>
		</div>
	);
}
