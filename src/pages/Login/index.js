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
              <h1 class="tracking-[10px] font-[Poppins] text-4xl font-[600]">CUSTOMER LOGIN</h1>
              </div>
              <form> 
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="txt-box mt-[20px]"
              /><br />
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="txt-box mt-[10px]"
              />
              </form>
              
             <button class="btn-style">Login</button>
             <p class="mt-[30px] no-underline tracking-[1.5px] font-[Poppins]">Not a member? <Link to='/signup'  class="no-underline font-[Poppins]">Signup</Link></p>

            </div>

          <Footer />
      </div>
      
      

      

  )
}

export default Login
