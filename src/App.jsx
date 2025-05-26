import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './screen/Home'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"



function App() {






  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<p>about</p>}></Route>
        <Route path='/services' element={<p>services</p>}></Route>
        <Route path='/portfolio' element={<p>portfolio</p>}></Route>
        <Route path='/contact' element={<p>contact</p>}></Route>
        <Route path='/quote' element={<p>quote</p>}></Route>
        <Route path='/faq' element={<p>faq</p>}></Route>
      
      </Routes>

    </Router>
    
    
      
    </>
  )
}

export default App
