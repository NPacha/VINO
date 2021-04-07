import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SignUp(props) {
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
		setState({
			...state,
			[event.target.name]: event.target.value
		});
		console.log('hello');
	};

	const handleSignUp = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('/users/register', {
				firstName: state.firstName,
				lastName: state.lastName,
				email: state.email,
				password: state.password
			});
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('userId', response.data.id);
			localStorage.setItem('name', response.data.firstName);
		} catch (err) {
			console.log(err);
		} finally {
			props.setIsLoggedIn(true);
			window.location.assign('/home');
		}
	};

	return (
		<div id="SignUp">
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

				<label htmlFor="password">
					Password <br />
					<p style={{ fontSize: '10px' }}>**Must be at least 8 characters</p>
				</label>
				<input
					type="password"
					name="password"
					value={state.password}
					onChange={handleInput}
				/>

				<input value="Submit" type="submit" onClick={handleSignUp} />
			</form>
		</div>
	);
}
