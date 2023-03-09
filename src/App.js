import React from 'react'
import NavbarComp from './compnents/Navbar/NavbarComp';
import Home from './pages/Homepage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './compnents/footer/Footer';
import HowItWorks from './pages/HowItWorks';
import OurShefs from './pages/OurShefs';
import Book from './pages/Book';
import Login from './pages/Login';
import Signup from './pages/Signup';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavbarComp/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/works' element={ <HowItWorks/>}/>
      <Route path='/shefs' element={ <OurShefs/>}/>
      <Route path='/book' element={ <Book/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/signup' element={ <Signup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App