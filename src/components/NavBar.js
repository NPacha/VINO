import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	if (localStorage.name) {
		return (
			<nav className="NavBar">
				{props.routes

					.filter(item => !item.path.includes(':'))
					.filter(item => !item.key.includes('LandingPage'))
					.filter(item => !item.key.includes('SignUp'))
					.filter(item => !item.key.includes('LogIn'))
					.filter(item => !item.key.includes('AddPhoto'))
					.map(({ key, path }) => (
						<Link
							key={key}
							to={path}
							style={{ textDecoration: 'none' }}
							className="link"
						>
							{key}
						</Link>
					))
					.concat(`Welcome, ${localStorage.name}!`)}
			</nav>
		);
	} else {
		return (
			<nav className="NavBar">
				{props.routes

					.filter(item => !item.path.includes(':'))
					.filter(item => !item.key.includes('LandingPage'))
					.filter(item => !item.key.includes('LogOut'))
					.filter(item => !item.key.includes('MyFavs'))
					.filter(item => !item.key.includes('AddPhoto'))
					.map(({ key, path }) => (
						<Link
							key={key}
							to={path}
							style={{ textDecoration: 'none' }}
							className="link"
						>
							{key}
						</Link>
					))}
			</nav>
		);
	}
};

export default NavBar;
