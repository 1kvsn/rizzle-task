import React from 'react';

function VideoItem (props) {

	const { id, video } = props.video;

	return (
		<div className="video-container">
			<video 
				className="video" 
				preload="auto"
				controls 
				autoPlay
				key={id}
				poster={video.coverImageUrl}
				>
					<source src={video.originalUrl} type="video/mp4" />
					Your browser does not support the video tag.
			</video>
		</div>
	)
}

export default VideoItem;