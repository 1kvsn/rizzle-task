import React, { useState, useEffect } from 'react';
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(DEFAULT_VIDEO_INDEX);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isVideoDetailOpen, setIsVideoDetailOpen] = useState(false);
  const totalVideosCount = data.length;

  useEffect(() => {
    swipeAction(swipeDirection);
  }, [swipeDirection])


  const swipeAction = (dir) => {
    
    if (dir === SWIPE_DOWN) {
      if (currentVideoIndex === 0 || isVideoDetailOpen) return; // do nothing
      if (currentVideoIndex > 0) {
        setCurrentVideoIndex(prevState => prevState-1);
      }
    }

    if (dir === SWIPE_UP) {
      if (currentVideoIndex === totalVideosCount - 1 || isVideoDetailOpen) return; // do nothing
      if (currentVideoIndex < totalVideosCount) {
        setCurrentVideoIndex(prevState => prevState+1);
      }
    }

    if (dir === SWIPE_LEFT) {
      isVideoDetailOpen && setIsVideoDetailOpen(false);
    }

    if (dir === SWIPE_RIGHT) {
      setIsVideoDetailOpen(true);
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
      {
        isVideoDetailOpen && (
          <VideoDetails 
            video={getVideo()} 
            setIsVideoDetailOpen={setIsVideoDetailOpen} 
            isVideoDetailOpen={isVideoDetailOpen}
          />
          )
      }
      {
        !isVideoDetailOpen && <VideoItem video={getVideo()} />
      }
      </SwipeableItem>
      
    </div>
  );
}

export default App;
