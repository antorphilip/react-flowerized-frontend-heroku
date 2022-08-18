import React from "react";
import carousel1 from "../../assets/image/EventsCarousel1.png";
import carousel2 from "../../assets/image/EventsCarousel2.png";
import carousel3 from "../../assets/image/EventsCarousel3.png";
import carousel4 from "../../assets/image/EventsCarousel4.png";
import Product from "./Product";

const Events = () => {
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

      <div className="bg-[#fff] border-2 w-[90%] lg:w-[70%] mx-[auto] h-[41 0px] lg:h-[165px] top-[80px] z-[9] my-2 lg:my-14">
        <div className="flex-col">
          <div className="flex flex-col lg:flex-row justify-between px-[30px] py-[30px]">
            <div className="w-[90%] lg:w-[15%] mx-[auto] lg:mx-0 h-[30px] text-md lg:text-4xl  text-center">
              <h1 className="uppercase">Quick Find</h1>
            </div>
            {/* Occasion */}
            <div className="w-[100%] lg:w-[20%] h-[30px] text-md lg:text-lg mx-[auto] lg:mx-0 ">
              <h1>Occasion</h1>
              <select
                placeholder="Select an Occasion"
                className="w-[100%] h-[100%] border-2 mt-[5px] lg:mt-0"
              >
                <option value="" disabled selected hidden>
                  All
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            {/* Package */}
            <div className="w-[100%] lg:w-[20%] h-[30px] text-md lg:text-lg mt-[30px] lg:mt-0">
              <h1>Package</h1>
              <select
                placeholder="Select an Occasion"
                className="w-[100%] h-[100%] border-2 mt-[5px] lg:mt-0"
              >
                <option value="" disabled selected hidden>
                  All
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            {/* Flower per pc */}
            <div className="w-[100%] lg:w-[20%] h-[30px] text-md lg:text-lg mt-[30px] lg:mt-0">
              <h1>Flower (per pc)</h1>
              <select
                placeholder="Select an Occasion"
                className="w-[100%] h-[100%] border-2 mt-[5px] lg:mt-0"
              >
                <option value="" disabled selected hidden>
                  All
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            {/* Price Range */}
            <div class="relative w-[100%] lg:w-[20%] mt-[30px] lg:mt-0">
              <label className="text-md lg:text-lg">Price Range</label>
              <input
                type="range"
                className="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                min="0"
                max="5000"
                step="0.5"
              />
              <div className="flex justify-between text-md">
                <h1>0</h1>
                <h1>5000</h1>
              </div>
            </div>
            {/* end price range */}
          </div>

          <div className="text-center">
            <button className="w-[90%] lg:w-[20%] bg-[#fff] h-[50px] text-md lg:text-lg border-2">
              Find Flower
            </button>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[80%] mx-[auto] ">
        <Product />
      </div>
    </>
  );
};

export default Events;
