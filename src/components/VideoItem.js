import React from 'react';

function VideoItem (props) {

	console.log(props, 'props in video item comp');
	
	return (
		<video controls>
			<source src={props.data[0].video.originalUrl} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	)
}

export default VideoItem;