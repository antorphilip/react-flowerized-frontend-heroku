import React from 'react'
import HeroSection from '../../components/HeroSection'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
          <HeroSection />

           <div class="flex justify-center items-center flex-col h-[55vh] bg-[#ecdce4]">
              <div>
              <h1 class="tracking-[10px] font-[Poppins] text-4xl font-[600]">SIGNUP NOW</h1>
              </div>
              
              <form> 
              <input
                  type="text"
                  name="email"
                  placeholder="Fullname"
                  class="txt-box mt-[20px]"
              /><br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="txt-box mt-[10px]"
              /><br />
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="txt-box mt-[10px]"
              />
              </form>
              
             
             
             <button class="btn-style">Signup</button>
             <p class="mt-[30px] no-underline tracking-[1.5px] font-[Poppins]">Already have an account? <Link to='/login' class="no-underline font-[Poppins]">Login</Link></p>

            </div>

          <Footer />
      </div>
  )
}

export default Signup
