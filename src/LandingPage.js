import React from 'react'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import TilePage from './TilePage'
import './stylesheets/LandingPage.css'
import styled from 'styled-components'
import logo from './resources/logo.png'

const LandingPage = () => {
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

  return (
    <Router>
      <div className='navigation'>
        <img className='logo' src={logo} alt='navigation-background-logo'></img>
        <div className='linkWrapper'>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/tilepage'>TilePage</StyledLink>
        </div>
      </div> 
      <Route path='/tilepage' render={() => <TilePage/>}></Route>
    </Router>
  )
}
  

export default LandingPage;
