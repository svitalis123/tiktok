import React, { useState } from 'react'
import './VideoSidebar.css'
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
function VideoSidebar({likes, comments, shares}) {
    const [liked, setliked]=useState(false);

    return (
        <div className="VideoSidebar">
            <div className="VideoSidebar__buttons">
                {liked ? (<FavoriteIcon fontSize="large" onClick={e=>setliked(false)}/>):(<FavoriteBorderIcon fontSize="large" onClick={e=>setliked(true)} />)}
                <p>{liked? likes + 1 : likes }</p>
            </div>
            <div className="VideoSidebar__buttons">
                <MessageIcon fontSize="large"/>
                <p>{comments}</p>
            </div>
            <div className="VideoSidebar__buttons">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
