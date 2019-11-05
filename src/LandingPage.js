import React , {useState} from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import TilePage from './TilePage'
import Menu from './components/Menu'



const LandingPage = () => {
  // States
  const [menuOpen, toggleMenu] = useState(false)

  console.log(menuOpen)
  return (
    <Router>
      <div style={{position:"relative"}}>
          <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}></Menu>
          <Route path='/tilepage' render={() => <TilePage />}></Route>
      </div>
     
      
      
    </Router>
  )
}
  

export default LandingPage;
