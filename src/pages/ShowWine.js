import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../router/routes.js';
import Footer from '../components/Footer';
import AddPhoto from '../components/AddPhoto';

export default function ShowWine(props) {
	const [wine, setWine] = useState([]);
	const [images, setImages] = useState([]);

	//we are using useEffect so we can go grab some data that we need from the backend
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/wines/${props.match.params.id}`); //Just like req.params on the backend....The location of where that params is on the front end for react.
				const data = await response.json();
				console.log(data.favoriteWines);
				setWine([data]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

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

	return (
		<div className="ShowFav">
			<NavBar routes={routes} />
			{console.log('line 23', wine)}
			<div className="favssection">
				{wine.map(item => {
					return (
						<>
							<p>Name: {item.Name}</p>
							<p>Winery: {item.Winery}</p>
							<p>Vintage: {item.vintage}</p>
							<p>Varietal: {item.Varietal}</p>
							<p>Country: {item.Country}</p>
							<p>Province: {item.Province}</p>
							<p>My Tasting Notes: {item.MyTastingNotes}</p>
							<p>Photo: </p>

							<Link to={`/${item._id}/edit`} style={{ textDecoration: 'none' }}>
								<button>Edit Tasting Notes</button>
							</Link>
							{/* <Link to={`/addphoto`} style={{ textDecoration: 'none' }}>
							<button>Add Photo</button>
						</Link> */}
							{/* <AddPhoto images={images} setImages={setImages} /> */}
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
