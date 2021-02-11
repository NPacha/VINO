import React, { useState } from 'react';

export default function WineInfo(props) {
	return (
		<>
			<div className={'column'}>
				<p>Name: {props.wine.Name}</p>
				<p>Country: {props.wine.Country}</p>
				<p>Varietal: {props.wine.Varietal}</p>
				<p>Vintage: {props.wine.vintage}</p>
			</div>{' '}
			<br />
		</>
	);
}
