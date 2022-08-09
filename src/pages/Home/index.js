import React from "react";
import HeroSection from "../../components/HeroSection";
import Feature from "../../components/Feature";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="mt-[80px]">
        <HeroSection />
        <Feature />
        <div
          id="carouselExampleCrossfade"
          className="carousel slide carousel-fade relative w-[95%] m-[auto] shadow-xl z-[-2]"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 transition-[2.5] ">
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade "
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade "
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden h-[full]">
            <div className="carousel-item active float-left w-full">
              <img
                src="./image/carousel-1.png"
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="./image/carousel-2.png"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="./image/carousel-3.png"
                className="block w-full h-[full]"
                alt="Exotic Fruits"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="./image/carousel-4.png"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
        </div>

        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Home;
