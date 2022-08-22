import React from "react";
import carousel1 from "../../assets/image/EventsCarousel1.png";
import carousel2 from "../../assets/image/EventsCarousel2.png";
import carousel3 from "../../assets/image/EventsCarousel3.png";
import carousel4 from "../../assets/image/EventsCarousel4.png";
import imageme from "../../assets/image/coffee.png";

const Customize = () => {
  return (
    <>
      <div className="mt-[80px]"></div>
      {/* carousel */}
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative w-[100%] m-[auto]"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-0 transition-[2.5]">
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
              src={carousel1}
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={carousel2} className="block w-full" alt="Camera" />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={carousel3}
              className="block w-full h-[full]"
              alt="Exotic Fruits"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={carousel4} className="block w-full" alt="Exotic Fruits" />
          </div>
        </div>
      </div>

      {/* carousel end */}
      <div className="w-[100%]  text-center justify-center py-7 bg-[#C1A3A3] mt-7">
        <h1 className="mb-4">Customize your chosen Bouquet!</h1>
        <img
          src={imageme}
          className={`rounded shadow-xl w-[300px] mx-[auto]`}
          alt="featured"
          loading="lazy"
        />
      </div>

      <div className="w-[95%] lg:w-[90%] flex flex-col lg:flex-row mx-[auto] justify-around lg:px-28 py-14">
        <div className="w-[100%] lg:w-[60%] h-[300px] lg:h-[auto] shadow-xl "></div>
        <div className="w-[100%] lg:w-[30%] border-2 mt-7 lg:mt-0 py-7">
          <div className="uppercase text-center w-[80%] mx-[auto]">
            <h1 className="p-4 bg-[#C1A3A3]">Pick focal flower</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-[10px] ">
              <div className="border-2 h-[100px]"></div>
              <div className="border-2 "></div>
              <div className="border-2 "></div>
              <div className="border-2"></div>
              <div className="border-2 "></div>
              <div className="border-2 "></div>
            </div>
          </div>

          <div className="uppercase text-center w-[80%] mx-[auto] mt-[20px]">
            <h1 className="p-4 bg-[#C1A3A3]">Pick accent flower</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-[10px] ">
              <div className="border-2 h-[100px]"></div>
              <div className="border-2 "></div>
              <div className="border-2 "></div>
              <div className="border-2"></div>
              <div className="border-2 "></div>
              <div className="border-2 "></div>
            </div>
          </div>

          <div className="uppercase text-center w-[80%] mx-[auto] mt-[20px]">
            <select className="w-[100%] py-2 bg-[#C1A3A3] uppercase text-center">
              <option value="" disabled selected hidden>
                Color of wrapper
              </option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>

            <select className="w-[100%] py-2 bg-[#C1A3A3] uppercase text-center mt-[10px]">
              <option value="" disabled selected hidden>
                ADD-ons
              </option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customize;
