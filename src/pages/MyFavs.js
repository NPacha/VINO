import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MyFavs(props) {
	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/wines');
				const data = await response.json();
				props.setMyFavs(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<div className="MyFavs">
			{props.myFavs.map(item => {
				console.log('line 7', props.myFavs);

				return (
					<>
						<p key={item._id}>Name:{item['item'].Name}</p>

						<Link to={`/myfavs/${item['item']._id}`}>
							<button>Show Page</button>
						</Link>
					</>
				);
			})}
		</div>
	);
}
