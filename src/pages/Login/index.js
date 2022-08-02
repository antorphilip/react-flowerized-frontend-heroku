import React from 'react'
import HeroSection from '../../components/HeroSection'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
      <div>
          <HeroSection />

           <div class="flex justify-center items-center flex-col h-[45vh] bg-[#ecdce4]">
              <div>
              <h1>CUSTOMER LOGIN</h1>
              </div>
              <form> 
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="txt-box"
              /><br />
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="txt-box"
              />
              </form>
              
             
             
             <button class="btn-style">Login</button>
             <p>Not a member? <Link to='/signup'>Signup</Link></p>

            </div>

          <Footer />
      </div>
      
      

      

  )
}

export default Login
