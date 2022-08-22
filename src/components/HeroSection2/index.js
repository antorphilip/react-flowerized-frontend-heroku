import React from "react";
import heroVid from "../../assets/videos/vid-3.webm";

const HeroSection1 = () => {
  return (
    <>
      <div className="mt-[80px]"></div>
      <div className="w-[100%] h-[70vh] xl:h-[80vh] grid place-content-center">
        <video
          className="w-[100%] h-[70%] xl:h-[80%] object-cover	z-[-1] absolute"
          src={heroVid}
          autoPlay
          loop
          muted
        />
        <div>
          <h1 className="text-center font-KaushanScript text-5xl md:text-6xl xl:text-8xl text-[#fff] tracking-[2px]">
            "One-stop shopping for all of your floral needs."
          </h1>
          <p className="text-center font-Cinzel text-2xl xl:text-5xl text-[#fff] pt-[40px]">
            Find the perfect flower for that important day!
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
