import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

export default function WineInfo(props) {
	const maxNumber = 3;

	const onChange = (imageList, addUpdateIndex) => {
		console.log(imageList, addUpdateIndex);
		props.setImages(imageList);
		console.log(props.images);
	};
	return (
		<div className="App">
			<ImageUploading
				multiple
				value={props.images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
			>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps
				}) => (
					// write your building UI
					<div className="upload__image-wrapper">
						<button
							style={isDragging ? { color: 'red' } : undefined}
							onClick={onImageUpload}
							{...dragProps}
						>
							Click or Drop here
						</button>
						&nbsp;
						<button onClick={onImageRemoveAll}>Remove all images</button>
						{imageList.map((image, index) => (
							<div key={index} className="image-item">
								<img src={image['data_url']} alt="" width="100" />
								<div className="image-item__btn-wrapper">
									<button onClick={() => onImageUpdate(index)}>Update</button>
									<button onClick={() => onImageRemove(index)}>Remove</button>
								</div>
							</div>
						))}
					</div>
				)}
			</ImageUploading>
		</div>
	);
}
