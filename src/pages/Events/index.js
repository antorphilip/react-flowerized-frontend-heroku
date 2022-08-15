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
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 transition-[2.5]">
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

      <div className="bg-[#CBA99E] w-[100%] h-[80px]"></div>
      <Product />
    </>
  );
};

export default Events;
