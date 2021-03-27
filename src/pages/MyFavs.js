import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function MyFavs(props) {
	const [myFavs, setMyFavs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/api/wines', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token')
				}
			});
			const data = await response.json();
			setMyFavs(data);
		}
		fetchData();
	}, []);
	// 	// Immediately Invoked Function Expression
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('/api/wines');
	// 			const data = await response.json();
	// 			setMyFavs(data);
	// 			console.log('line12', data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// },

	return (
		<>
			<NavBar routes={routes} />
			<header className={'backgroundFavs'}>
				<h1>My Favorites</h1>
			</header>
			<div className={'MyFavs'}>
				{myFavs.map(item => {
					return (
						<div className={'winefavs'}>
							<p key={item._id}>
								{' '}
								<br />
								{item.Name}
							</p>

							<Link to={`/${item._id}`} style={{ textDecoration: 'none' }}>
								<button>See more</button>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
}
