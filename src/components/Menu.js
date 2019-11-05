import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import { Tween, Timeline } from 'react-gsap'
import '../stylesheets/Menu.css'

import logo from '../resources/logo.png'
import arrow from '../resources/arrow.svg'

const Menu = ({menuOpen, toggleMenu}) => {
    const StyledLink = styled(Link)`
      color: #303C6C;
      padding: 0.25em 1em;
      border: 2px solid #F4976C;
      border-radius: 3px;
      height: auto;
      width: auto;
      &:hover {
        background-color: #303C6C;
        color: white;
      }
    `
    const handleClick = (event) => {
        toggleMenu(!menuOpen)
    }
    if(menuOpen) {
        return (
            <div className='contentWrapper'>
                <Timeline
                    target= {
                        <div className='navigation'>
                            <Timeline
                                target={
                                    <input onClick={handleClick} className='logo' type='image' src={logo} alt='navigation-background-logo'></input>
                                }>
                                <Tween 
                                    from = {{
                                        opacity: 1
                                    }}
                                    to = {{
                                        opacity: 0,
                                        bottom:"-32px",
                                        margin: "0 0 0 60%",
                                    }}
                                    duration = {0.5}
                                    delay={0.25}
                                />
                                
                            </Timeline>
                            <Timeline
                                target= {
                                    <div className='linkWrapper'>
                                        <StyledLink to='/'>Home</StyledLink>
                                        <StyledLink to='/tilepage'>TilePage</StyledLink>
                                        <div className='suspend'>
                                            <input style={{width:'30px'}} type='image' onClick={handleClick} src={arrow} alt='suspend menu'></input>
                                        </div>
                                    </div>
                                }>
                                <Tween
                                    from={{
                                        opacity: 0
                                    }}
                                    to={{
                                        opacity: 1,
                                        zIndex: 1,
                                    }}
                                    duration={0.5}
                                    delay={0.65}
                                />
                            
                            </Timeline>
                        </div>
                    }>
                    <Tween
                        from={{
                            width: "128px",
                            height: "128px",
                            border: "10px solid #F4976C",
                            borderRadius: "69px",
                        }}
                        to={{
                            width: "250px",
                            top:"32px",
                            height:'64px',
                            border: "7px solid #F4976C",
                            borderRadius: "5px",
                        }}
                        duration={0.5}
                        delay= {0.25}
                    />
                </Timeline>
            </div>
        )
    } else {
        return(
            <div>
                <div className='navigation'>
                    <input onClick={handleClick} className='logo' type='image' src={logo} alt='navigation-background-logo'></input>
                </div>
            </div>
        )
    }
    
}


export default Menu