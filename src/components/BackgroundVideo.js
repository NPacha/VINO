import React from 'react';

import classes from '../scss/BackgroundVideo.module.scss';
import video from './wine_pouring_in_slowmotion1.mp4';

const BackgroundVideo = () => {
	return (
		<div className={classes.Container}>
			<video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
				<source src={video} type="video/mp4" />
			</video>
			<div className={classes.Content}>
				<div className={classes.SubContent}>
					<h1>My Wine App</h1>
					<button type="button" className="btn btn-outline-dark">
						Let's Go
					</button>
				</div>
			</div>
		</div>
	);
};

export default BackgroundVideo;
