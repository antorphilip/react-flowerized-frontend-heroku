import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './components/pages/Events';
import Customize from './components/pages/Customize';
import Reviews from './components/pages/Reviews';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import HeroSection from './components/HeroSection';
import Login from './components/Login';

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    <HeroSection />
    <Login/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/events' component={Events} />
        <Route path='/customize' component={Customize} />
        <Route path='/reviews' component={Reviews} />  
        <Route path='/aboutUs' component={AboutUs} /> 
        <Route path='/contactUs' component={ContactUs} /> 
      </Routes>
    </Router>
  </>
  );
}

export default App;
