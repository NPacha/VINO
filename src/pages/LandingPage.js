import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from "../components/SignUpForm";
import BackgroundVideo from '../components/BackgroundVideo';
import axios from 'axios';

export default function LandingPage(props) {

	const [state, setState] = useState({
		email: "",
		password: "",
		isLoggedIn: false

	});

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn])

	const handleLogOut = () => {
		setState({
			email: "",
			password: "",
			isLoggedIn: false,

		});
		localStorage.clear();
	}

	const handleInput = (event) => {
		setState({...state, [event.target.name]: event.target.value });
	}

	const handleSignUp = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:3002/register", {
				email: state.email, 
				password: state.password,
			});
			console.log(response);
			localStorage.setItem('token', response.data.token);
			setIsLoggedIn(true);
		} catch(err) {
			console.log(err);
		}
	};

	const handleLogIn = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:3002/login", {
				email: state.email,
				password: state.password,
			});
			localStorage.setItem('token', response.data.token);
			setIsLoggedIn(true);
		} catch (error) {
			console.log(error)
		}
	};




	return (
		<>
			<div className="LandingPage">
				<h1>VINO</h1>
				<p>Search and save your favorite wines, all in one place</p>
				<Link to={`/home`} style={{ textDecoration: 'none' }}>
					<button>Let's Go</button>
					<SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
				</Link>
			</div>
		</>
	);
}
