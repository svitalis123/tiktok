import React, { useRef, useState } from 'react'
import './Video.css'
import Footer from './Footer'
import MvSidebar from './MvSidebar';
function Video({url, channel, description, song, likes, comments, shares}) {
    const [playing, setPlaying]=useState(false);
    const VideoRef=useRef(null);
    
    const playVideo= ()=>{
        if(playing){
            VideoRef.current.pause();
            setPlaying(false);
        }else{
            VideoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
             <video 
             loop
             onClick={playVideo}
             ref={VideoRef}
             className="video__card"
             src={url}
              
             ></video>
             <MvSidebar likes={likes} comments={comments} shares={shares}/>
            <Footer  channel={channel} description={description} song={song}/>
           
        </div>
    )
}

export default Video
