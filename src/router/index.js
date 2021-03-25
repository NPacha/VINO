import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	let [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.token) {
			setIsLoggedIn(true);
		}
	}, [isLoggedIn]);

	return (
		<Router>
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={props => (
							<Component
								page={key}
								{...props}
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
							/>
						)}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
