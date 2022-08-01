import React from 'react'
import HeroSection from '../HeroSection';
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import  "../Signup.css"

const Signup = () => {
  return (
    <div className='page'>
      <HeroSection />
      <div className='cover-signup'>
        <h1 className='sign-mes'>SIGNUP NOW</h1>
        <input className="txt-box" type="text" placeholder="Fullname"/>
        <input className="txt-box" type="text" placeholder="Email"/>
        <input className="txt-box" type="password" placeholder="Password"/>
        <button className='sign-btn'>Signup</button>
        <p className='mes'>By signing up you agree to the <Link to='/termsofservice' className='link'>Terms of Services</Link></p>
        <p className='mes-log'>Already have an account? <Link to='/login' className='link'>Login</Link></p>


      </div>
      <Footer />
      
    </div>
  )
}

export default Signup
