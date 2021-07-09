import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
	const images = props.images.map(image => {
		//note: destructuring the element object just so that we don't have to type element.description, element.id, etc.
		return <ImageCard key={image.id} image={image} />
	});

	return <div className="image-list">{images}</div>;
};

export default ImageList;
