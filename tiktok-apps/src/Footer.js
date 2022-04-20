import React from 'react'
import './Footer.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
function Footer({channel, description, song}) {
    return (
        <div className="Footer">
          <div className="Footer__text">
          <h2>{channel}</h2>
          <p>{description}</p>
          

          <div className="Footer__ticker">
          <MusicNoteIcon className="Footer__icon"/>
          <Ticker className="ticker" mode="smooth">
                {({ index }) => (
                    <>
                        <p>{song}</p>
                    </>
                )}
            </Ticker>
          </div>
          </div>
          <img className="Footer__record" src="https://static.thenounproject.com/png/934821-200.png" alt="record" height="50px" width="50px"/>
        </div>
    )
}

export default Footer

