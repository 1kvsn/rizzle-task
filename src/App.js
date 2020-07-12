import React from 'react';
import './App.css';

import { data } from './data';

import VideoItem from './components/VideoItem';
import SwipeableItem from './components/SwipeableItem';

function App() {
  const [defaultVideoIndex, setDefaultVideoIndex] = React.useState(0);

    // checks the total number of available videos
    // remembers the current number of the video among the list and returns it.
    // 

    const totalVideosCount = data.length;
    console.log(totalVideosCount, 'total count')
  


  return (
    <div className="App">
        <SwipeableItem>
          <VideoItem data={data} />
        </SwipeableItem>
    </div>
  );
}

export default App;
