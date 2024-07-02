import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Resume from "./Components/Resume"
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {


  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
