import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mt-[80px]"></div>
      <div className="w-[100%] h-[70vh] xl:h-[80vh]">
        <video
          className="w-[100%] h-[70%] xl:h-[80%] object-cover	z-[-1] absolute"
          src="/videos/vid-1.mp4"
          autoPlay
          loop
          muted
        />
        <h1 className="text-center font-KaushanScript text-5xl md:text-6xl xl:text-8xl text-[#fff] tracking-[2px] pt-[60px] lg:pt-[100px] xl:pt-[130px]">
          "You bring the love, We'll bring the flowers."
        </h1>
        <p className="text-center font-Cinzel text-2xl xl:text-5xl text-[#fff] pt-[40px]">
          Find the perfect flower for that important day!
        </p>
        <div className="flex justify-center md:mt-[30px] xl:mt-[50px] ">
          <a
            href="/customize"
            className="text-center text-[#fff] hover:text-[#694E4E]"
          >
            <button className="text-xl text-center w-[200px] md:w-[300px] h-[40px] md:h-[60px] bg-[#C1A3A3] font-[Alata] font-thin">
              CUSTOMIZED NOW!
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;