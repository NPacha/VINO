import React, { useState, useEffect } from 'react';
import WineInfo from '../components/WineInfo';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function App(props) {
	const Scroll = require('react-scroll');
	const scroller = Scroll.scroller;
	const videoSource =
		'https://res.cloudinary.com/durki4y94/video/upload/v1613607063/wine_pouring_in_slowmotion1_yljxjs.mp4';

	const [query, updateQuery] = useState({
		baseURL: 'https://quiniwine.com/api/pub/wineKeywordSearch/',
		name: '',
		searchURL: ''
	});

	const [wine, setWine] = useState([]);

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					console.log('line 18', data.items);
					await setWine(data.items);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'https://quiniwine.com/api/pub/wineKeywordSearch/',
						name: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.name
		});
		scroller.scrollTo('pagesection', {
			duration: 1500,
			delay: 100,
			smooth: true
		});
	};

	const handleClick = async (e, newWine) => {
		console.log(e.target);
		e.target.innerHTML = 'Added';
		const body = JSON.stringify({
			userId: localStorage.getItem('userId'),
			wine: {
				ref: newWine['item']._id,
				Name: newWine['item'].Name,
				Winery: newWine['item'].Winery,
				vintage: newWine['item'].vintage,
				Varietal: newWine['item'].Varietal,
				Country: newWine['item'].Country,
				Province: newWine['item'].Province,
				Type: newWine['item'].Type,
				MyTastingNotes: ''
			}
		});

		try {
			const response = await fetch('/api/wines', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
			// const newWine = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			<a id="back2Top" href="#">
				<i class="arrow up" style={{ display: grid }}></i>
			</a>;
		}
	};

	return (
		<>
			<NavBar routes={routes} />
			<div className="HomePage">
				<div className="Container">
					<video autoPlay loop controls>
						<source src={videoSource} type="video/mp4" />
					</video>
					<div className="Content">
						{localStorage.name ? (
							<div className="SubContent">
								<h2>VINO</h2>
								<form onSubmit={handleSubmit}>
									<input
										id="name"
										type="text"
										placeholder="Type your wine here..."
										value={query.name}
										onChange={handleChange}
									/>

									<input type="submit" value="Find Wine" />
								</form>
							</div>
						) : (
							<div>
								<h2>VINO</h2>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className={'Page'} name="pagesection">
				{wine.map(item => {
					return (
						<div className={'winehome'}>
							<WineInfo wine={item} key={item._id} />

							<button
								className={'addfavbutton'}
								onClick={e => handleClick(e, { item })}
							>
								Add to My Favs
							</button>
						</div>
					);
				})}
			</div>

			<Footer />
		</>
	);
}
