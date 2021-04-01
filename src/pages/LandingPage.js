import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import BackgroundVideo from '../components/BackgroundVideo';
import axios from 'axios';

export default function LandingPage(props) {
	return (
		<>
			<div className="LandingPage">
				<h1>VINO</h1>
				<p>Search and save your favorite wines, all in one place</p>
				{/* <Link to={`/home`} style={{ textDecoration: 'none' }}>
					<button>Let's Go</button>
				</Link> */}
				<Link to={'/register'}>
					<button>Register</button>
				</Link>
				<Link to={'/login'}>
					<button>Log In</button>
				</Link>
			</div>
		</>
	);
}
