
import { useEffect, useState } from 'react';
import './App.css';
import db from './Firebase';
import Video from './Video'
function App() {
  const [videos, setVideos]=useState([]);
   useEffect(()=>{
      db.collection('videos').onSnapshot((snapshot)=>(
        setVideos(snapshot.docs.map(doc=>doc.data()))
      ))
   },[]);
  return (
    <div className="App">
     <div className="App__videos">
      {
        videos.map(({url, channel, description, song, likes, comments
        , shares})=>(<Video url={url} channel={channel}
        description={description} song={song} likes={likes} comments={comments} shares={shares} />))
      }

     </div>
    </div>
  );
}

export default App;
