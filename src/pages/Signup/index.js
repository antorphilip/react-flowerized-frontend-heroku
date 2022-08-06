import React from 'react'
import HeroSection from '../../components/HeroSection'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
          <HeroSection />

           <div class="flex justify-center items-center flex-col h-[55vh]">
              <div>
              <h1 class="tracking-[6px] md:tracking-[10px] font-ElMessiri text-3xl md:text-4xl font-[600] text-[#694E4E]">SIGNUP NOW</h1>
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
             <p class="mt-[30px] no-underline tracking-[1.5px] font-Alata">Already have an account? <Link to='/login' class="no-underline font-NanumGothic">Login</Link></p>

            </div>

          <Footer />
      </div>
  )
}

export default Signup
