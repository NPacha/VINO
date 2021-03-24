import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SignUpForm(props) {
	const [state, setState] = useState({
		email: '',
		password: '',
		isLoggedIn: false
	});

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

	const handleLogOut = () => {
		setState({
			email: '',
			password: '',
			isLoggedIn: false
		});
		localStorage.clear();
	};

	const handleInput = event => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSignUp = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/register', {
				email: state.email,
				password: state.password
			});
			console.log(response);
			localStorage.setItem('token', response.data.token);
			setIsLoggedIn(true);
		} catch (err) {
			console.log(err);
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
			setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h2>Sign Up</h2>
			<form>
				<div>
					<label htmlFor="email">Email</label>
					<input type="text" name="email" onChange={handleInput} />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="text" name="password" onChange={handleInput} />
				</div>
				<input value="Submit" type="submit" onClick={handleSignUp} />
			</form>
		</div>
	);
}
