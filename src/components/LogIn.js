import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LogInForm(props) {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

	const [error, setError] = useState();

	useEffect(() => {
		if (localStorage.token) {
			props.setIsLoggedIn(true);
		} else {
			props.setIsLoggedIn(false);
		}
	}, [props.isLoggedIn]);

	const handleInput = event => {
		setState({
			...state,
			[event.target.name]: event.target.value
		});
	};

	const handleLogIn = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('/users/login', {
				email: state.email,
				password: state.password
			});
			if (response.data.token) {
				localStorage.clear();
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('userId', response.data.id);
				localStorage.setItem('name', response.data.firstName);
				props.setIsLoggedIn(true);
				window.location.assign('/home');
			} else {
				// localStorage.setItem('error', response.data.message);
				setError('Incorrect username or password, please try again');
			}
		} catch (error) {
			console.log('myerror' + error);
		} finally {
		}
	};
	return (
		<div id="login">
			<h2>Log In</h2>
			<form>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					value={state.email}
					onChange={handleInput}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					value={state.password}
					onChange={handleInput}
				/>
				<p>{error}</p>

				<input value="Submit" type="submit" onClick={handleLogIn} />
				<br />
			</form>
		</div>
	);
}
