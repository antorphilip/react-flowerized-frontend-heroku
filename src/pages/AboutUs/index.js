import React from 'react'
import Footer from '../../components/Footer'

const AboutUs = () => {


  return (

    <div>
      <div>
        <h1 class="sm:text-6xl sm:tracking-[20px] font-thin text-[#333f27] tracking-[13px] text-5xl uppercase font-[Poppins] ml-4 mt-5 text-center">ABOUT US</h1>
        <p class="sm:text-2xl text-center mt-5 italic text-1xl sm:tracking-[2px] tracking-[1px]">“Love is the flower you’ve got to let grow.” - John Lennon</p>
      </div>
      <div class="flex justify-center">
        <img class="sm:w-[70%] object-contain w-[95%] mt-4"  src="./image/aboutus-banner.png" alt="logo"/>
      </div>
      <div class="sm:h-[25vh] h-[63vh]">
      <p  class="sm:w-[70%] w-[90%] mx-[auto] font-NanumGothic text-justify text-lg indent-12 mt-5 leading-loose">
      The Blooms by Marra was started 8 years ago with their online Facebook Page. In addition, the shop was founded by Marra's mother-in-law. 
      Ms. Marra Borres is the owner of the Blooms by Marra, that was named after her. But the original name was "Kitkats Flower Shop" when her 
      mother-in-law was still handling the shop. It has been a great opportunity for Ms. Marra to grow and continue the business. The goal of 
      their shop is to provide the best quality of flowers with a custom arrangement that will suit the customer’s preference. The Blooms by 
      Marra Shop is located at 111 Mc Arthur Highway Marulas Valenzuela. 
      </p>
      </div>
      < Footer/>


    </div>




    
  )
}

export default AboutUs