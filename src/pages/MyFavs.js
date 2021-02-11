import React, { useState } from 'react';

export default function MyFavs(props) {
	return (
		<div className="MyFavs">
			{props.myFavs.map(item => {
				console.log('line 7', props.myFavs);
				return (
					<>
						<p key={item.id}>Name:{item['item'].Name}</p>
					</>
				);
			})}
		</div>
	);
}
