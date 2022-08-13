import { useNavigate } from "react-router-dom";
import React from "react";
import heroVid from "../../assets/videos/vid-1.mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  
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
            "You bring the love, We'll bring the flowers."
          </h1>
          <p className="text-center font-Cinzel text-2xl xl:text-5xl text-[#fff] pt-[40px]">
            Find the perfect flower for that important day!
          </p>
          <div className="flex justify-center md:mt-[30px] xl:mt-[50px] ">
              <button onClick={() => navigate("/customize")}
              className="text-xl text-[#fff] hover:text-[#694E4E] text-center w-[200px] md:w-[300px] h-[40px] md:h-[60px] bg-[#C1A3A3] font-[Alata] font-thin">
                CUSTOMIZE NOW!
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
