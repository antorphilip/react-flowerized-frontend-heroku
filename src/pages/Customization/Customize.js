import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carousel1 from "../../assets/image/EventsCarousel1.webp";
import carousel2 from "../../assets/image/EventsCarousel2.webp";
import carousel3 from "../../assets/image/EventsCarousel3.webp";
import carousel4 from "../../assets/image/EventsCarousel4.webp";
import imageme from "../../assets/image/coffee.webp";
import FocalFlower from "../../components/FlowerPicker/FocalFlower";
import AccentFlower from "../../components/FlowerPicker/AccentFlower";

const Customize = () => {
  const navigate = useNavigate();
  const [isOpenFocal, setisOpenFocal] = useState(false);

  const handleButtonToggle = () => setisOpenFocal(!isOpenFocal);

  return (
    <>
      <div>{isOpenFocal ? <FocalFlower /> : ""}</div>
      {/* <div>{isOpen ? <AccentFlower /> : ""}</div> */}

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
      <div className="w-[100%]  text-center justify-center py-7 mt-7">
        <h1 className="mb-4 font-[Alata] text-2xl text-[#694E4E]">
          CUSTOMIZE YOUR CHOSEN BOUQUET
        </h1>
        {/* yung image dito na ididisplay ay yung naclick ni user sa events/customize page */}
        <img
          src={imageme}
          className={`rounded shadow-xl w-[300px] mx-[auto]`}
          alt="featured"
          loading="lazy"
        />
      </div>

      <div className="w-[95%] lg:w-[90%] flex flex-col lg:flex-row mx-[auto] justify-around lg:px-28 py-14">
        <div className="w-[100%] lg:w-[60%] h-[300px] lg:h-[auto] shadow-2xl rounded "></div>
        <div className="w-[100%] lg:w-[30%] border-2 mt-7 lg:mt-0 py-7 border-[#694E4E] rounded">
          <div className="uppercase text-center w-[80%] mx-[auto]">
            <h1 className="p-4 bg-[#C1A3A3] font-[Alata] text-white">
              Pick focal flower
            </h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-[10px]">
              <button
                className="border-2 h-[100px] border-[#694E4E] flex border-dashed items-center"
                onClick={handleButtonToggle}
              >
                <span className="w-[30%] h-full border-dashed border-2 border-[#694E4E] py-7 border-y-0 border-l-0">
                  +
                </span>
                <span className="w-[100%] h-[100%] uppercase text-center font-[Alata] text-white"></span>
              </button>
              <button
                className="border-2 h-[100px] border-[#694E4E] flex border-dashed items-center"
                onClick={handleButtonToggle}
              >
                <span className="w-[30%] h-full border-dashed border-2 border-[#694E4E] py-7 border-y-0 border-l-0">
                  +
                </span>
                <span className="w-[100%] h-[100%] uppercase text-center font-[Alata] text-white"></span>
              </button>
            </div>
          </div>

          <div className="uppercase text-center w-[80%] mx-[auto] mt-[20px]">
            <h1 className="p-4 bg-[#C1A3A3] font-[Alata] text-white">
              Pick accent flower
            </h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-[10px]">
              <button className="border-2 h-[100px] border-[#694E4E] flex border-dashed items-center">
                <span className="w-[30%] h-full border-dashed border-2 border-[#694E4E] py-7 border-y-0 border-l-0">
                  +
                </span>
                <span className="w-[100%] h-[100%] uppercase text-center font-[Alata] text-white"></span>
              </button>
              <button className="border-2 h-[100px] border-[#694E4E] flex border-dashed items-center">
                <span className="w-[30%] h-full border-dashed border-2 border-[#694E4E] py-7 border-y-0 border-l-0">
                  +
                </span>
                <span className="w-[100%] h-[100%] uppercase text-center font-[Alata] text-white"></span>
              </button>
            </div>
          </div>

          <div className="uppercase text-center w-[80%] mx-[auto] mt-[20px] space-y-4">
            <select className="w-[100%] py-2 bg-[#C1A3A3] uppercase text-center font-[Alata] text-white">
              <option value="" disabled selected hidden>
                Color of wrapper
              </option>
              <option>Pink</option>
              <option>White</option>
              <option>Red</option>
              <option>Black</option>
              <option>Gold</option>
              <option>Brown</option>
              <option>Cream</option>
            </select>

            <select className="w-[100%] py-2 bg-[#C1A3A3] uppercase text-center mt-[10px] font-[Alata] text-white">
              <option value="" disabled selected hidden>
                ADD-ons
              </option>
              <option>Chocolate</option>
              <option>Cake</option>
              <option>Balloons</option>
              <option>Teddy Bear</option>
            </select>
            <button
              onClick={() => navigate("/mycart")}
              className="px-3 py-1 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e] font-[Alata]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customize;
