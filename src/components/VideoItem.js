import React from 'react';

function VideoItem (props) {
	const { id, video } = props.video;

	return (
		<video controls key={id}>
			<source src={video.originalUrl} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	)
}

export default VideoItem;