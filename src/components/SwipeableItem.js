import React, { useState, useEffect } from 'react';

function SwipeableItem (props) {
	const [data, setData] = useState({
		startX: null,
		startY: null,
		endX: null,
		endY: null,
		swipeDirection: null,
	})

	const handleMouseDown = e => {
		e.preventDefault();
		console.log(e.clientX, e.clientY);
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
						/* left swipe */ 
						console.log('left swipe <<<<=========')
						setData({swipeDirection: 'left'})
				} else {
						/* right swipe */
						console.log('=========>>>>> right swipe')
						setData({swipeDirection: 'right'})
				}
		} else {
				if ( yDiff > 0 ) {
						/* up swipe */ 
						console.log('^')
						console.log('^')
						console.log('^')
						setData({swipeDirection: 'up'})
				} else { 
						/* down swipe */
						console.log('v');
						console.log('v');
						console.log('v');
						setData({swipeDirection: 'down'})
				}
		}

		console.log(xDiff, yDiff)
		console.log(data.swipeDirection)


		// e.preventDefault();
		// console.log(e.clientX, e.clientY, 'move');
		
		// performs reset
		setData({
			startX: null,
			startY: null,
			swipeDirection: null,
		})
	}




	return (
		<div 
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
		>
			{React.cloneElement(props.children, { swipeDirection: data.swipeDirection })}
		</div>
		
	)
}

export default SwipeableItem;