import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	const [myFavs, setMyFavs] = useState([]);

	return (
		<Router>
			<NavBar routes={routes} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={() => (
							<Component page={key} myFavs={myFavs} setMyFavs={setMyFavs} />
						)}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
