import React from 'react';

function VideoDetails (props) {
	const { video } = props;

	return (
		<div className="details-container">
			<p>Title: {video && video.channel && video.channel.title}</p>
			<p>Creator: {video && video.channel && video.channel.user && video.channel.user.name}</p>
			<p>Views: {video.meta.viewCount}</p>

			<p>SWIPE LEFT TO GO BACK</p>
		</div>
	)
}

export default VideoDetails;