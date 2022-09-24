import React from "react";
import naomi from "../../assets/image/naomi.png";

const cartCard = () => {
  const featuredItems = [{ image: naomi, title: "Naomi", price: 99.99 }];

  return (
    <>
      <div className="w-[100%] h-[450px] overflow-auto">
        <div className="w-[95%]  bg-[#e8e8e8] shadow-md my-3 flex justify-between rounded hover:scale-[1.01] transition-[2.5] ml-2">
          <div className="w-[130px] flex">
            <img
              src={naomi}
              className={`rounded`}
              alt="ProductImage"
              loading="lazy"
            />
            <div className="flex-col">
              <h1 className="text-[11px] lg:text-xl font-[Alata] font-light text-[#694E4E]">
                Naomi
              </h1>
              <h1 className="text-[11px] lg:text-xl font-[Alata] font-light text-[#694E4E]">
                Naomi
              </h1>
              <input type="number" className="w-[100px]"></input>
            </div>
          </div>
          <div>
            <i className="transition-all text-[30px] hover:text-[30px] text-red-600 hover:text-red-900 fa fa-trash my-[10px] mr-3"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default cartCard;
