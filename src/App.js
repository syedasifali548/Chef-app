import React from 'react'
import NavbarComp from './compnents/Navbar/NavbarComp';
import Home from './pages/Homepage/Home';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <div>
     <NavbarComp/>
     <Container>
     <Home/>
     </Container>
    </div>
  )
}

export default App