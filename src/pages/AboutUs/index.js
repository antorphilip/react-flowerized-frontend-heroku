import React from "react";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="h-[5px] mt-[80px]"></div>
      <div>
        <div className="h-[200px] text-center">
          <h1 className="titleClass text-[#694E4E] tracking-[13px] text-5xl uppercase">
            ABOUT US
          </h1>
          <p className="text-2xl md:text-4xl tracking-[1px] font-[Courgette] text-[#694E4E]">
            “Love is the flower you’ve got to let grow.” - John Lennon
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#F3C5C5] to-[#C1A3A3] text-center block xl:flex pt-[10px]">
          <img
            className="w-[95%] mx-[auto] xl:my-5 xl:mx-5"
            src="./image/aboutus.png"
            alt="logo"
          />
          <p className="w-[90%] font-Alata text-justify text-lg indent-12 my-[auto]  mx-[auto] xl:mx-10 leading-loose xl:leading-[2.5rem] py-4 text-[#fff]">
            The Blooms by Marra was started 8 years ago with their online
            Facebook Page. In addition, the shop was founded by Marra's
            mother-in-law. Ms. Marra Borres is the owner of the Blooms by Marra,
            that was named after her. But the original name was "Kitkats Flower
            Shop" when her mother-in-law was still handling the shop. It has
            been a great opportunity for Ms. Marra to grow and continue the
            business. The goal of their shop is to provide the best quality of
            flowers with a custom arrangement that will suit the customer’s
            preference. The Blooms by Marra Shop is located at 111 Mc Arthur
            Highway Marulas Valenzuela.
          </p>
        </div>
        <div className="h-[30px]"></div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
