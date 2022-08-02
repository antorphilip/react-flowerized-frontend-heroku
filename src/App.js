import React from 'react'
import { Route, Routes } from "react-router"
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Signup from './pages/Signup';




function App() {
  return (
    <div className='App'>
      
      <NavBar />
      <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />

      <Route
        path="/events"
        element={
            <Events />
        }
      />

      <Route
        path="/aboutus"
        element={
            <AboutUs />
        }
      />

      <Route
        path="/login"
        element={
            <Login />
        }
      />

      <Route
        path="/signup"
        element={
            <Signup />
        }
      />

      </Routes>
      
      
    </div>
  )
}

export default App



