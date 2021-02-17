import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function MyFavs(props) {
	const [myFavs, setMyFavs] = useState([]);
	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/wines');
				const data = await response.json();
				setMyFavs(data);
				console.log('line12', data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="MyFavs">
			<NavBar routes={routes} />
			{myFavs.map(item => {
				return (
					<>
						<p key={item._id}>Name:{item.Name}</p>

						<Link to={`/${item._id}`}>
							<button>See more</button>
						</Link>
					</>
				);
			})}
		</div>
	);
}
