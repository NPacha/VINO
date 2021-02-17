import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import BackgroundVideo from '../components/BackgroundVideo';

export default function LandingPage(props) {
	return (
		<>
			<div className="LandingPage">
				<h1>Welcome to My Wine App</h1>
				<Link to={`/home`}>
					<button className="letsgo">Let's Go</button>
				</Link>
				{/* <BackgroundVideo /> */}
			</div>
		</>
	);
}
