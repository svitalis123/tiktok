import React, { useEffect, useState } from 'react'
import './MvSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
function MvSidebar({likes, comments, shares}) {
    const [liked, setLiked]=useState(false);
   
    return (
        <div className="Mvsidebar" >
            
            <div className="Mvsidebar__buttons">
                {
                    liked ? <FavoriteIcon fontSize="large" onClick={e=>setLiked(false)}/> : <FavoriteBorderIcon fontSize="large" onClick={e=>setLiked(true)}/>
                }
                <p>{liked ? likes + 1 : likes}</p>

            </div>
            <div className="Mvsidebar__buttons">
                <MessageIcon fontSize="large"/>
                <p>{comments}</p>
            </div>
            <div className="Mvsidebar__buttons">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
           
           
        </div>
    )
}

export default MvSidebar
