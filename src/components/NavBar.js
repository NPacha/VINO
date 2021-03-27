import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="NavBar">
			{props.routes

				.filter(item => !item.path.includes(':'))
				.filter(item => !item.key.includes('LandingPage'))
				.filter(item => !item.key.includes('SignUpForm'))
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
};

export default NavBar;
