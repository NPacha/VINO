import React, { useState, useEffect } from 'react';
import WineInfo from '../components/WineInfo';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'https://quiniwine.com/api/pub/wineKeywordSearch/',
		name: '',
		searchURL: ''
	});
	const [wine, setWine] = useState([]);

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					console.log('line 18', data.items);
					await setWine(data.items);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'https://quiniwine.com/api/pub/wineKeywordSearch/',
						name: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.name
		});
	};

	const handleClick = async newWine => {
		const body = JSON.stringify({
			ref: newWine['item']._id,
			Name: newWine['item'].Name,
			Winery: newWine['item'].Winery,
			vintage: newWine['item'].vintage,
			Varietal: newWine['item'].Varietal,
			Country: newWine['item'].Country,
			Province: newWine['item'].Province,
			MyTastingNotes: ''
		});

		try {
			const response = await fetch('/api/wines', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
			// const newWine = await response.json();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="HomePage">
			<NavBar routes={routes} />
			<h2>My Wine App</h2>
			<form onSubmit={handleSubmit}>
				<input
					id="name"
					type="text"
					placeholder="Type your wine here....."
					value={query.name}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Wine" />
			</form>
			<div className={'Page'}>
				{wine.map(item => {
					return (
						<div className={'winehome'}>
							<WineInfo wine={item} key={item._id} />
							<button onClick={() => handleClick({ item })}>
								Add To MyFavs
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
