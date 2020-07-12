import React from 'react';
import './App.css';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <video controls>
        <source src={data[0].video.originalUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
