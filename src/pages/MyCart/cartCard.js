import React from "react";
import naomi from "../../assets/image/naomi.png";

const cartCard = () => {
  return (
    <>
      <div className="flex w-[100%] lg:w-[90%] bg-blue-200 rounded shadow-md mx-[auto] my-3">
        <div className="w-[150px]">
          <img
            src={naomi}
            className={`rounded`}
            alt="ProductImage"
            loading="lazy"
          />
          <h1 className="text-center">Naomi</h1>
        </div>
      </div>

      {/* <div className="flex w-[95%] lg:w-[70%] m-[auto] justify-between bg-blue-200 my-3 rounded">
        <div className="w-[100%] bg-[#e8e8e8] shadow-md flex justify-between rounded hover:scale-[1.01] transition-[2.5]">
          <div className="w-[20%] flex-col text-center">
            <img
              src={naomi} 
              className={`rounded`}
              alt="ProductImage"
              loading="lazy"
            />
            <h1 className="my-2 text-[11px] lg:text-xl font-[Alata] font-light text-[#694E4E]">
              Naomi
            </h1>
          </div>
          <div className="flex w-[70%] justify-between px-[5%] mr-[15px]">
            <div className="flex items-center">
              <h1 className="my-2 text-[11px] lg:text-xl font-[Alata] font-light text-[#694E4E]">
                ₱3,000.00
              </h1>
            </div>
            <div className="flex items-center">
              <div className="flex flex-row w-[100px] rounded-lg relative bg-transparent">
                <button
                  data-action="decrement"
                  class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="text"
                  class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                  name="custom-input-number"
                  value="0"
                ></input>
                <button
                  data-action="increment"
                  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="my-2 text-[11px] lg:text-xl font-[Alata] font-light text-[#694E4E]">
                ₱3,000.00
              </h1>
            </div>
            <div className="flex items-center">
              <i className="transition-all text-[30px] hover:text-[30px] text-red-600 hover:text-red-900 fa fa-trash"></i>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default cartCard;
