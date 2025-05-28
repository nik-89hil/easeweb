import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Home } from './screen/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {About} from "./components/About.jsx"
import {Services} from "./components/Services.jsx"
import { Portfolio } from './components/Portfolio.jsx'
import {Contact} from "./components/Contact.jsx"
import {Quote} from "./components/Quote.jsx"
import {Faq} from "./components/Faq.jsx"
import {Footer} from "./components/Footer.jsx"

function App() {






  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/quote' element={<Quote/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
      
      </Routes>
      <Footer/>

    </Router>
    
    
      
    </>
  )
}

export default App
