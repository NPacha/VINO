import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyFavs(props) {
	return (
		<div className="MyFavs">
			{props.myFavs.map(item => {
				console.log('line 7', props.myFavs);
				return (
					<>
						<p key={item.id}>Name:{item['item'].Name}</p>
						<Link to={`/myfavs/${item['item'].id}`}>
							<button>Show Page</button>
						</Link>
					</>
				);
			})}
		</div>
	);
}
