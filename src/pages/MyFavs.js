import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function MyFavs(props) {
	const [myFavs, setMyFavs] = useState([]);

	const userId = localStorage.getItem('userId');

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(`/users/${userId}`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token')
				}
			});
			console.log(response);
			setMyFavs(response.data.favoriteWines);
		}
		fetchData();
	}, []);

	return (
		<>
			<NavBar routes={routes} />
			<header className={'backgroundFavs'}>
				<h1>My Favorites</h1>
			</header>
			<div className={'MyFavs'}>
				{myFavs.length ? (
					myFavs.map(item => {
						return (
							<div className={'winefavs'} key={item._id}>
								<p>
									{' '}
									<br />
									{item.Name}
								</p>

								<Link to={`/${item._id}`} style={{ textDecoration: 'none' }}>
									<button>See more</button>
								</Link>
							</div>
						);
					})
				) : (
					<p id="nofavs">No favorite wines added yet.</p>
				)}
			</div>
		</>
	);
}
