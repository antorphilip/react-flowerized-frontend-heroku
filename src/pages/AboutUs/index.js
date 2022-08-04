import React from "react";
import Footer from "../../components/Footer";


const AboutUs = () => {
  return (
    <div>
      <div className="h-[25vh] text-center">
        <h1 class="text-[#333f27] tracking-[13px] text-5xl uppercase font-NanumGothic mt-[10vh]">
          ABOUT US
        </h1>
        <p class="mt-5 italic text-2xl tracking-[1px] font-KaushanScript text-[#333f27]">
          “Love is the flower you’ve got to let grow.” - John Lennon
        </p>
      </div>

      <div className="bg-[#ECDCE4] text-center block xl:flex ">
        <img
          class="w-[95%] mx-[auto] xl:my-5 xl:mx-5"
          src="./image/aboutus-banner.png"
          alt="logo"
        />
        <p class="w-[95%] font-NanumGothic text-justify text-lg indent-12 my-[auto]  mx-[auto] xl:mx-10 leading-loose xl:leading-[2.5rem] py-4 ">
          The Blooms by Marra was started 8 years ago with their online Facebook
          Page. In addition, the shop was founded by Marra's mother-in-law. Ms.
          Marra Borres is the owner of the Blooms by Marra, that was named after
          her. But the original name was "Kitkats Flower Shop" when her
          mother-in-law was still handling the shop. It has been a great
          opportunity for Ms. Marra to grow and continue the business. The goal
          of their shop is to provide the best quality of flowers with a custom
          arrangement that will suit the customer’s preference. The Blooms by
          Marra Shop is located at 111 Mc Arthur Highway Marulas Valenzuela.
        </p>
      </div>
      <div className="h-[30px]"></div>

      <Footer />
    </div>
  );
};

export default AboutUs;
