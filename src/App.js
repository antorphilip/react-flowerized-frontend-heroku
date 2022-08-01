import React from 'react'
import Home from './components/pages/Home'
import { Route, Routes } from "react-router"
import NavBar from './components/NavBar'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Events from './components/pages/Events'



function App() {
  return (
    <div className='App'>
      
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />}/>
        <Route path="events" element={<Events />} />
      </Routes>
      
      
    </div>
  )
}

export default App



