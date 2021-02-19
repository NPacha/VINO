import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';

export default function LandingPage(props) {
	return (
		<>
			<div className="LandingPage">
				<h1>VINO</h1>
				<p>Search and save your favorite wines, all in one place</p>
				<Link to={`/home`} style={{ textDecoration: 'none' }}>
					<button>Let's Go</button>
				</Link>
			</div>
		</>
	);
}
