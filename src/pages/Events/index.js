import React from "react";
import "tw-elements";

const Events = () => {
  return (
    <>
      <div className="mt-[80px]"></div>

      {/* carousel */}
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative w-[100%] m-[auto] shadow-xl z-[-2]"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-0 transition-[1.5s] ">
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
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
              src="./image/fakecarousel.png"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="./image/fakecarousel.png"
              className="block w-full"
              alt="Camera"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="./image/fakecarousel.png"
              className="block w-full h-[full]"
              alt="Exotic Fruits"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="./image/fakecarousel.png"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>
      {/* carousel end */}

      <div className="bg-[#CBA99E] w-[100%] h-[80px]"></div>
    </>
  );
};

export default Events;
