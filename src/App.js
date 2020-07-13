import React from 'react';
import './App.css';

import { data } from './data';

import VideoItem from './components/VideoItem';
import VideoDetails from './components/VideoDetails';
import SwipeableItem from './components/SwipeableItem';

import { 
  DEFAULT_VIDEO_INDEX, 
  SWIPE_DOWN, 
  SWIPE_UP, 
  SWIPE_LEFT, 
  SWIPE_RIGHT 
} from './constants';


function App () {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(20);
  const [swipeDirection, setSwipeDirection] = React.useState(null);
  const [isVideoDetailOpen, setIsVideoDetailOpen] = React.useState(false);
  const totalVideosCount = data.length;

  React.useEffect(() => {
    swipeAction(swipeDirection);
  }, [swipeDirection])


  const swipeAction = (dir) => {
    
    if (dir === 'down') {
      if (currentVideoIndex === 0) return; // do nothing
      if (currentVideoIndex > 0) {
        setCurrentVideoIndex(prevState => prevState-1);
      }
    }

    if (dir === 'up') {
      if (currentVideoIndex === totalVideosCount - 1) return; // do nothing
      if (currentVideoIndex < totalVideosCount) {
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
      {
        isVideoDetailOpen && (
          <VideoDetails video={getVideo()} />
        )
      }
      <SwipeableItem setSwipeDirection={setSwipeDirection}>
        <VideoItem video={getVideo()} />
      </SwipeableItem>
    </div>
  );
}

export default App;
