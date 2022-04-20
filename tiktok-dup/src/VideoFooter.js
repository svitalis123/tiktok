import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './VideoFooter.css'
import Ticker from 'react-ticker'
function VideoFooter({channel, description, song}) {
    return (
        <div className="Videofooter">
            <div className="Videofooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="Videofooter__ticker">
                <MusicNoteIcon className="Videofooter__icon"/>
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <p>{song}</p>
                            
                        </>
                    )}
                 </Ticker>   
                </div>
               
            </div>
            <img className="Videofooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="record" height="50px" width="50px"/>
        </div>
    )
}

export default VideoFooter
