import React, { useState, useEffect } from 'react';
import WineInfo from '../components/WineInfo';

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
					console.log(data.items);
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

	const handleClick = newWine => {
		props.setMyFavs([...props.myFavs, { newWine }]);
		console.log(props.myFavs);
	};

	return (
		<div className="HomePage">
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
						<>
							<WineInfo wine={item} key={item.id} />
							<button onClick={() => handleClick({ item })}>
								Add To MyFavs
							</button>
						</>
					);
				})}
			</div>
		</div>
	);
}
