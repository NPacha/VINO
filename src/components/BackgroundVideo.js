import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../scss/BackgroundVideo.module.scss';

const BackgroundVideo = () => {
	const videoSource =
		'https://res.cloudinary.com/durki4y94/video/upload/v1613607063/wine_pouring_in_slowmotion1_yljxjs.mp4';
	return (
		<div className="Container">
			<video autoPlay loop controls>
				<source src={videoSource} type="video/mp4" />
			</video>
			<div className="Content">
				<div className="SubContent">
					<h1>My Wine App</h1>
					<Link to={`/home`}>
						<button type="button" className="btn btn-outline-dark">
							Let's Go
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BackgroundVideo;
