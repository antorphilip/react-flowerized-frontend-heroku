import React from 'react';
import  "../Login.css"
import HeroSection from '../HeroSection';



const Login = () => {
  return (
    <div className='page'>
      <HeroSection />
      <div className='cover'>
        <h1>Login</h1>
        <input className="txt-box" type="text" placeholder="Email"/>
        <input className="txt-box" type="password" placeholder="Password"/>

        <div className='login-btn'>Login</div>

      </div>
    </div>
  )
}

export default Login
