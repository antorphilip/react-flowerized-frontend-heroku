import React from 'react'
import { Route, Routes } from "react-router"
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from './pages/Login';




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
        path="/login"
        element={
            <Login />
        }
      />

      </Routes>
      
      
    </div>
  )
}

export default App



