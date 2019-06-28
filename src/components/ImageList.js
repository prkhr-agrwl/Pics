import React from "react";

const ImageList = props => {
	const images = props.images.map(({ description, id, urls }) => {
		return (
			//<div  className="ui segment">
			<img
				key={id}
				className="ui image large floated"
				src={urls.regular}
				alt={description}
			/>
			//</div>
		);
	});

	return <div>{images}</div>;
};

export default ImageList;
