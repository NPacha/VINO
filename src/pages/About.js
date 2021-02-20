import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function About(props) {
	return (
		<>
			<NavBar routes={routes} />
			<div className="AboutPage">
				A simple app that allows you to search and save the wines you love all
				in one place. <br /> <br />
				The idea was born out of wanting to have a place to store all the wines
				that I discovered and love, all in one place to reference later. After
				trying a new bottle, I would always take a picture of it to store on my
				phone, and I realized it would be helpful to have them all in one place,
				to actually know what kind of wine I like to drink, and learn more about
				each type of wine. <br />
				Voila! VINO was born. <br /> <br />
				Love, <br />
				Nicole Pacha, student of software engineering.{' '}
			</div>
		</>
	);
}
