import React from 'react'
import Footer from '../../components/Footer'

const AboutUs = () => {


  return (

    <div>
      <div>
        <h1 class="font-thin text-[#333f27] tracking-[13px] md:tracking-[20] text-5xl md:text-6xl uppercase font-[Poppins] ml-4 mt-5 text-center">ABOUT US</h1>
        <p class="text-base sm:text-xl md:text-2xl lg:text-3xl text-center mt-5 italic tracking-[2px]">“Love is the flower you’ve got to let grow.” - John Lennon</p>
      </div>
      <div class="flex justify-center">
        <img class="w-[95%] sm:w-[85%] lg:w-[70%] object-contain mt-4"  src="./image/aboutus-banner.png" alt="logo"/>
      </div>
      <div>
      <p  class=" w-[90%] md:w-[80%] lg:w-[70%] mx-[auto] font-NanumGothic text-justify text-lg indent-12 mt-5 leading-loose">
      The Blooms by Marra was started 8 years ago with their online Facebook Page. In addition, the shop was founded by Marra's mother-in-law. 
      Ms. Marra Borres is the owner of the Blooms by Marra, that was named after her. But the original name was "Kitkats Flower Shop" when her 
      mother-in-law was still handling the shop. It has been a great opportunity for Ms. Marra to grow and continue the business. The goal of 
      their shop is to provide the best quality of flowers with a custom arrangement that will suit the customer’s preference. The Blooms by 
      Marra Shop is located at 111 Mc Arthur Highway Marulas Valenzuela. 
      </p>
      </div>
      <div class="w-[100%] h-[98vh] mt-[50px]">
      <video src='/videos/vid-2.mp4' autoPlay loop muted />
      
      </div>
      < Footer/>
      


    </div>




    
  )
}

export default AboutUs