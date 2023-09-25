import React from "react";
// import ProductCard from "./Otherjsxfile/ProductCard";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import Service from "./components/Pages/Service";
import ContactUs from "./components/Pages/ContactUs";
import Skill from './components/Pages/Skill';
import Resumes from "./components/Pages/Resumes";
import Portfilios from "./components/Pages/Portfilios";

// import Parent from "./Props/Parent";

function App(){
  return (
    <React.Fragment>

      <Router>
        <Routes>
          <Route  path="/" element={<Home/>}></Route>        
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/services" element={<Service/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/skill" element={<Skill/>}></Route>
          <Route path="/resume" element={<Resumes/>}></Route>
          <Route path="/portfolio" element={<Portfilios/>}></Route>
        </Routes>
      </Router>

      {/* <ProductCard/> */}
    </React.Fragment>
  )
}
export default App;