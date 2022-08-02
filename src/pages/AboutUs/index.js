import React from 'react'
import Footer from '../../components/Footer'

const AboutUs = () => {
  return (
    <div>

    <h1 class="font-thin text-[#333f27] tracking-[20px] uppercase text-6xl font-[Poppins] ml-4 mt-5 text-center">
                ABOUT US
            </h1>
            <p class="text-center mt-5 italic text-2xl tracking-[2px]">“Love is the flower you’ve got to let grow.” - John Lennon</p>


    <div class="flex flex-wrap justify-center mt-2">
            <img class="object-contain w-[70%] mt-5"  src="./image/aboutus-banner.png" alt="logo"/>
    </div>

            <p  class="w-[70%] h-[20vh] mx-[auto] font-[Poppins] text-justify text-lg indent-12 mt-5 leading-loose">
      The Blooms by Marra was started 8 years ago with their online Facebook Page. In addition, the shop was founded by Marra's mother-in-law. 
      Ms. Marra Borres is the owner of the Blooms by Marra, that was named after her. But the original name was "Kitkats Flower Shop" when her 
      mother-in-law was still handling the shop. It has been a great opportunity for Ms. Marra to grow and continue the business. The goal of 
      their shop is to provide the best quality of flowers with a custom arrangement that will suit the customer’s preference. The Blooms by 
      Marra Shop is located at 111 Mc Arthur Highway Marulas Valenzuela. 
      </p>

      <div  className='hero-container'>
      <video src='/videos/vid-2.mp4' autoPlay loop muted />
    </div>

    < Footer/>
    </div>
  )
}

export default AboutUs