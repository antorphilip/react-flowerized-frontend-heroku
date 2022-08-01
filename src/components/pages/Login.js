import React from 'react';
import  "../Login.css"
import HeroSection from '../HeroSection';
import Footer from '../Footer'




const Login = () => {
  return (
    <div className='page'>
      <HeroSection />
      <div className='cover'>
        <h1 className='log-mes'>CUSTOMER LOGIN</h1>
        <input className="txt-box" type="text" placeholder="Email"/>
        <input className="txt-box" type="password" placeholder="Password"/>
        <button className='login-btn'>Login</button>
        <p className='alt-sign'>Not a member? Signup</p>


      </div>
      <Footer />
    </div>
  )
}

export default Login
