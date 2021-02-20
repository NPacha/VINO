import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function About(props) {
	return (
		<>
			<NavBar routes={routes} />
			<div className="AboutPage">
				A simple app that allows you to search and save the wines you like all
				in one place. <br /> <br />
				The idea was born out of wanting to have a place to store of all the
				wines that I discover and love, all in one place to reference later.
				After my inital strategy of taking a picture of the bottle after tasting
				it to remember it for later was not very efficient, I realized it would
				be helpful to have them all in one place, and actually know what kind of
				wine I like to drink. Voila! VINO was born. <br />
				Created by Nicole Pacha, student of software engineering.{' '}
			</div>
		</>
	);
}
