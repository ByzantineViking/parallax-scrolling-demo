
import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic'
import Tile from './components/Tile'
import './stylesheets/TilePage.css';

const TilePage = () => {
    const controller = new ScrollMagic.Controller()

    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: "#tilePin",
            duration: 1000, // scroll distance
            offset: 200 // start this scene after scrolling for 50px
        })
            .setPin("#myElement") // pins the element for the the scene's duration
            .addTo(controller) // assign the scene to the controller

    })
    return (
        <div>
            <header className='header'>
                Scroll down to test pinning elements
            </header>
            <div id='tilePin' />
            <div className='wrapper'>
                <div id="myElement" className='tileWrapper'>
                    <Tile width='400px' height='400px' header='What to do today?' />
                </div>
            </div>
            <div className='scroll'></div>
        </div>
    )
}


export default TilePage