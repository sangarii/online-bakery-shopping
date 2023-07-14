import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/home';
import About from './components/pages/About';
import Review from './components/pages/Review';
import Blogs from './components/pages/Blogs';
// import slidesData from './components/slidesData';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      
      </Routes>
    </Router>
  );
};

export default App;
