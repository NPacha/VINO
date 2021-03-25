import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SignUpForm(props) {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
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
		setState({ ...state, [event.target.name]: event.target.value });
		console.log('hello');
	};

	const handleSignUp = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/register', {
				firstName: state.firstName,
				lastName: state.lastName,
				email: state.email,
				password: state.password
			});

			localStorage.setItem('token', response.data.token);
			console.log(props.isLoggedIn);
		} catch (err) {
			console.log(err);
		} finally {
			props.setIsLoggedIn(true);
			window.location.assign('/home');
			console.log(response);
		}
	};

	const handleLogIn = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3002/login', {
				email: state.email,
				password: state.password
			});
			localStorage.setItem('token', response.data.token);
			props.setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h2>Sign Up</h2>
			<form>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					value={state.firstName}
					onChange={handleInput}
				/>

				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					value={state.lastName}
					onChange={handleInput}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					value={state.email}
					onChange={handleInput}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="text"
					name="password"
					value={state.password}
					onChange={handleInput}
				/>

				<input value="Submit" type="submit" onClick={handleSignUp} />
			</form>
		</div>
	);
}
