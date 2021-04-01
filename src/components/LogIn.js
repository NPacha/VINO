import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LogInForm(props) {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

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
			const response = await axios.post('http://localhost:3000/users/login', {
				email: state.email,
				password: state.password
			});
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('userId', response.data.id);
			localStorage.setItem('name', response.data.firstName);
			props.setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		} finally {
			window.location.assign('/home');
		}
	};
	return (
		<div>
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

				<input value="Submit" type="submit" onClick={handleLogIn} />
				<br />
			</form>
		</div>
	);
}
