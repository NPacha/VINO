import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';
import Footer from '../components/Footer';
import AddPhoto from '../components/AddPhoto';
import Axios from 'axios';

export default function ShowWine(props) {
	const [wine, setWine] = useState([]);

	const [imageSelected, setImageSelected] = useState('');

	const [imageURL, setImageURL] = useState('');

	const [winePhoto, setWinePhoto] = useState([]);

	//we are using useEffect so we can go grab some data that we need from the backend
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/wines/${props.match.params.id}`); //Just like req.params on the backend....The location of where that params is on the front end for react.
				const data = await response.json();

				setWine([data]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [wine]);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch(`/api/wines/${props.match.params.id}`); //Just like req.params on the backend....The location of where that params is on the front end for react.
	// 			const data = await response.json();

	// 			setWinePhoto([data]);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, [winePhoto]);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/wines/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/myfavs');
		}
	};

	const uploadImage = async e => {
		const formData = new FormData();
		formData.append('file', imageSelected);
		formData.append('upload_preset', 'd34rwz4i');

		Axios.post(
			'https://api.cloudinary.com/v1_1/ddrc5yh7v/image/upload',
			formData
		)
			.then(response => {
				let url = response.data.url;
				setImageURL(url);
				return url;
			})
			.then(async url => {
				console.log(url);
				try {
					const response = await Axios.put(
						`/api/wines/${props.match.params.id}`,
						{ Photo: url }
					);
					console.log(response);
				} catch (error) {
					console.error(error);
				}
			});
	};

	return (
		<div className="ShowFav">
			<NavBar routes={routes} />
			{console.log('line 23', wine)}
			<div className="favssection">
				{wine.map(item => {
					// let photoURL = null;
					// if (item.Photo) {
					// 	photoURL = item.Photo;
					// } else {
					// 	photoURL = imageURL;
					// }
					return (
						<>
							<p>Name: {item.Name}</p>
							<p>Winery: {item.Winery}</p>
							<p>Vintage: {item.vintage}</p>
							<p>Varietal: {item.Varietal}</p>
							<p>Country: {item.Country}</p>
							<p>Province: {item.Province}</p>
							<p>Type: {item.Type}</p>
							<p>My Tasting Notes: {item.MyTastingNotes}</p>
							<p>
								Photo: <br />
								<img src={wine[0].Photo} id="winephoto" />
							</p>

							<Link to={`/${item._id}/edit`} style={{ textDecoration: 'none' }}>
								<button>Edit Tasting Notes</button>
							</Link>

							<input
								type="file"
								onChange={event => {
									setImageSelected(event.target.files[0]);
								}}
							/>
							<button onClick={uploadImage}>Upload Image</button>

							<button onClick={handleDelete}>Delete</button>
							<Link to={`/myfavs`} style={{ textDecoration: 'none' }}>
								<button>Back to Favs</button>
							</Link>
						</>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}
