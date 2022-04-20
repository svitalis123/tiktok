import React, { useRef, useState } from 'react'
import './Video.css'
import VideoSidebar from './VideoSidebar'
import VideoFooter from './VideoFooter'
function Video({url, channel, description, song, likes, comments, shares}) {
    const [playing, setplaying]=useState(false);

    const VideoRef=useRef(null);
    const playmyvid=()=>{
        if(playing){
            VideoRef.current.pause();
            setplaying(false);
        }else{
            VideoRef.current.play();
            setplaying(true);
        }
    }

    return (
        <div className="Video">
            <video
            loop
            ref={VideoRef}
            onClick={playmyvid}
            src={url}
            className="videoplay"
            ></video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} comments={comments} shares={shares}/>
        </div>
    )
}

export default Video
