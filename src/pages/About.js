import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';

export default function About(props) {
	return (
		<div className="AboutPage">
			<NavBar routes={routes} />A simple app that allows you to search and save
			the wines you like all in one place. Created by Nicole Pacha, student of
			software engineering.{' '}
		</div>
	);
}
