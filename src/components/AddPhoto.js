import React, { useState } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';

export default function AddPhoto() {
	const [imageSelected, setImageSelected] = useState('');

	const [imageURL, setImageURL] = useState('');

	const uploadImage = () => {
		const formData = new FormData();
		formData.append('file', imageSelected);
		formData.append('upload_preset', 'd34rwz4i');

		Axios.post(
			'https://api.cloudinary.com/v1_1/ddrc5yh7v/image/upload',
			formData
		).then(response => {
			console.log(response);
			console.log(response.data.url);
			setImageURL(response.data.url);
		});
	};

	return (
		<div>
			<input
				type="file"
				onChange={event => {
					setImageSelected(event.target.files[0]);
				}}
			/>
			<button onClick={uploadImage}>Upload Image</button>

			<Image
				cloudName="ddrc5yh7v"
				publicId="https://api.cloudinary.com/v1_1/ddrc5yh7v/image/upload/ifeuro592wvtk5ccexhj.jpg"
			/>
		</div>
	);
}
