import React from 'react';

export default function WineInfo(props) {
	return (
		<>
			<div className={'column'}>
				<h1>Title: {props.wine.Name}</h1>
				{/* <h2>Year Released: {props.wine.Year}</h2>
				<div>
					<img src={props.wine.Poster} alt={props.wine.Title} />
				</div> */}
			</div>{' '}
			<br />
		</>
	);
}
