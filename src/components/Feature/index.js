import React from "react";

const Feature = () => {
  return (
    <>
      <div>
        <span className="bg-[#fff] ">
          <h1 className="titleClass text-[#694E4E]">Featured</h1>
        </span>
      </div>
      <span className="text-center grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-[40px] my-[70px] ">
        <span className="">
          <div className="w-[100%] ">
            <img
              src="./image/5k-bouquets.png"
              className="rounded border-[10px] border-[#886F6F] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left ">
              <div className="text-2xl font-[Alata] font-light mt-[5px] ml-[8px]">
                <p className="text-[#694E4E]">Money Bouquets</p>
                <p className=" mt-[-15px] text-[#886F6F]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px] text-[#694E4E]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x text-[#694E4E]"></i>
              </div>
            </div>
          </div>
        </span>

        <span className="">
          <div className="w-[100%]">
            <img
              src="./image/coffee.png"
              className="rounded border-[10px] border-[#C1A3A3] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Alata] font-light mt-[5px] ml-[8px]">
                <p className="text-[#694E4E]">Coffee</p>
                <p className="mt-[-15px] text-[#886F6F]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px] text-[#694E4E]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x text-[#694E4E]"></i>
              </div>
            </div>
          </div>
        </span>

        <span className="">
          <div className="w-[100%]">
            <img
              src="./image/luna.png"
              className="rounded border-[10px] border-[#886F6F] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Alata] font-light mt-[5px] ml-[8px]">
                <p className="text-[#694E4E]">Luna</p>
                <p className="mt-[-15px] text-[#886F6F]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px] text-[#694E4E]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x text-[#694E4E]"></i>
              </div>
            </div>
          </div>
        </span>

        <span className="">
          <div className="w-[100%]">
            <img
              src="./image/naomi.png"
              className="rounded border-[10px] border-[#C1A3A3] hover:scale-[1.04] transition-[2.5]"
              alt="featured"
            ></img>
            <div className="flex place-content-between text-left">
              <div className="text-2xl font-[Alata] font-light mt-[5px] ml-[8px]">
                <p className="text-[#694E4E]">Naomi</p>
                <p className="mt-[-15px] text-[#886F6F]">₱99.99</p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i className="fa-solid fa-cart-plus fa-3x mr-[20px] text-[#694E4E]"></i>
                <i className="fa-solid fa-pen-to-square fa-3x text-[#694E4E]"></i>
              </div>
            </div>
          </div>
        </span>
      </span>{" "}
    </>
  );
};

export default Feature;
