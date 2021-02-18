import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function About(props) {
	return (
		<>
			<NavBar routes={routes} />
			<div className="AboutPage">
				A simple app that allows you to search and save the wines you like all
				in one place. <br />
				Created by Nicole Pacha, student of software engineering.{' '}
			</div>
		</>
	);
}
