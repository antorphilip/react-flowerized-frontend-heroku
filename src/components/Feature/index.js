import React from "react";

const Feature = () => {
  return (
    <div>
      <div>
        <span className="bg-[#fff]">
          <h1 className="titleClass">Featured</h1>
        </span>
      </div>

      <span className="text-center grid grid-rows-4 sm:grid-cols-2 lg:grid-cols-4 gap-10 h-[130rem] mx-[40px] my-[70px]">
        <span className="">
          <div className="w-[100%] h-[85%]">
            <img
              src="./image/5k-bouquets.png"
              className="rounded border-[10px] border-[#333f27] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Poppins] font-bold mt-[5px] ml-[8px]">
                <p className="">Money Bouquets</p>
                <p className=" mt-[-15px]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x"></i>
              </div>
            </div>
          </div>
        </span>

        <span className="">
          <div className="w-[100%] h-[85%]">
            <img
              src="./image/coffee.png"
              className="rounded border-[10px] border-[#333f27] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Poppins] font-bold mt-[5px] ml-[8px]">
                <p className="">Coffee</p>
                <p className="mt-[-15px]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x"></i>
              </div>
            </div>
          </div>
        </span>

        <span className="">
          <div className="w-[100%] h-[85%]">
            <img
              src="./image/luna.png"
              className="rounded border-[10px] border-[#333f27] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Poppins] font-bold mt-[5px] ml-[8px]">
                <p className="">Luna</p>
                <p className="mt-[-15px]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x"></i>
              </div>
            </div>
          </div>
        </span>

        <span className="">
          <div className="w-[100%] h-[85%]">
            <img
              src="./image/naomi.png"
              className="rounded border-[10px] border-[#333f27] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Poppins] font-bold mt-[5px] ml-[8px]">
                <p className="">Naomi</p>
                <p className="mt-[-15px]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x"></i>
              </div>
            </div>
          </div>
        </span>
      </span>
    </div>
  );
};

export default Feature;
