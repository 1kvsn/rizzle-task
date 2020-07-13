import React from 'react';
import './App.css';

import { data } from './data';

import VideoItem from './components/VideoItem';
import VideoDetails from './components/VideoDetails';
import SwipeableItem from './components/SwipeableItem';

import { 
  DEFAULT_VIDEO_INDEX, 
  SWIPE_DOWN, SWIPE_UP, 
  SWIPE_LEFT, 
  SWIPE_RIGHT 
} from './constants';


function App () {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [swipeDirection, setSwipeDirection] = React.useState(null);
  const [isVideoDetailOpen, setIsVideoDetailOpen] = React.useState(false);
  const totalVideosCount = data.length;

  React.useEffect(() => {
    swipeAction(swipeDirection);
  }, [swipeDirection])


  const swipeAction = (dir) => {
    console.log('swipe action running')
    if (dir === 'down') {
      if (currentVideoIndex === 0) return; // do nothing
      if (currentVideoIndex > 0) {
        console.log('inside DOWN')
        setCurrentVideoIndex(prevState => prevState-1);
      }
    }

    if (dir === 'up') {
      if (currentVideoIndex === totalVideosCount - 1) return; // do nothing
      if (currentVideoIndex < totalVideosCount) {
        console.log('inside UP UP')
        setCurrentVideoIndex(prevState => prevState+1);
      }
    }

    if (dir === 'right') {
      setIsVideoDetailOpen(true);
    }

    if (dir === 'left') {
       isVideoDetailOpen && setIsVideoDetailOpen(false);
    }
    
    setSwipeDirection(null);
  }

  const getVideo = () => {
    const video = data[currentVideoIndex];
    return video;
  } 

  return (
    <div className="App">
      <SwipeableItem setSwipeDirection={setSwipeDirection}>
        {isVideoDetailOpen ? <VideoDetails video={getVideo()} /> : <VideoItem video={getVideo()} />}
      </SwipeableItem>
    </div>
  );
}

export default App;
