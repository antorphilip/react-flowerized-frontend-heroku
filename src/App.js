import React from 'react'
import Home from './components/pages/Home'
import { Route, Routes } from "react-router"
import NavBar from './components/Navbar'
import Login from './components/pages/Login'
import Events from './components/pages/Events'



function App() {
  return (
    <div className='App'>
      
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="events" element={<Events />} />
      </Routes>
      
      
    </div>
  )
}

export default App



