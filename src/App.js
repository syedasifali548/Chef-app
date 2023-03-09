import React from 'react'
import NavbarComp from './compnents/Navbar/NavbarComp';
import Home from './pages/Homepage/Home';
import { Container } from 'react-bootstrap';
import Footer from './compnents/footer/Footer';
const App = () => {
  return (
    <div>
     <NavbarComp/>
     <Home/>
    <Footer/>
    </div>
  )
}

export default App