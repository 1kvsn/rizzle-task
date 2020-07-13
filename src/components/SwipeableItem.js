import React, { useState, useEffect } from 'react';

import {  
  SWIPE_DOWN, 
  SWIPE_UP, 
  SWIPE_LEFT, 
  SWIPE_RIGHT 
} from './../constants';

function SwipeableItem (props) {
	const [data, setData] = useState({
		startX: null,
		startY: null,
		endX: null,
		endY: null,
	})

	// mouse events for mouse compatibility
	const handleMouseDown = e => {
		e.preventDefault();
		setData({
			startX: e.clientX,
			startY: e.clientY,
		})
	}

	const handleMouseUp = e => {
		e.preventDefault();
		console.log(e.clientX, e.clientY, 'up');
	}

	const handleMouseMove = e => {
		const { startX, startY } = data;

		if ( !startX || !startY ) {
			return;
		}

		const currentX = e.clientX;
		const currentY = e.clientY;

		const xDiff = startX - currentX;
		const yDiff = startY - currentY;

		if ( Math.abs(xDiff) > Math.abs(yDiff) ) {
				if ( xDiff > 0 ) {
						// left swipe
						props.setSwipeDirection(SWIPE_LEFT)
				} else {
						// right swipe
						props.setSwipeDirection(SWIPE_RIGHT)
				}
		} else {
				if ( yDiff > 0 ) {
						// up swipe
						props.setSwipeDirection(SWIPE_UP)
				} else { 
						// down swipe
						props.setSwipeDirection(SWIPE_DOWN)
				}
		}

		// e.preventDefault();
		
		// performs reset
		setData({
			startX: null,
			startY: null,
		})
	}

	// Touch events
	const handleTouchStart = e => {
		setData({
			startX: e.targetTouches[0].clientX,
			startY: e.targetTouches[0].clientY,
		})
	}

	const handleTouchMove = e => {
		const { clientX, clientY } = e.targetTouches[0];
		handleMouseMove({clientX, clientY});
	}



	return (
		<div 
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}

			onTouchStart={handleTouchStart}
			// onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
		>
			{props.children}
		</div>
		
	)
}

export default SwipeableItem;