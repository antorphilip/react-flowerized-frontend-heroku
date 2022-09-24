import React from "react";
import naomi from "../../assets/image/naomi.png";


const orderCard = () => {
  return (
    <>
      <div className="w-[100%] h-[450px] overflow-auto">
        <div className="w-[95%]  bg-[#e8e8e8] shadow-md my-3 flex justify-between rounded hover:scale-[1.01] transition-[2.5] ml-2">
          <div className="w-[25%] flex">
            <img
              src={naomi}
              className={`rounded`}
              alt="ProductImage"
              loading="lazy"
            />
          </div>
          <i className="transition-all text-[30px] hover:text-[30px] text-red-600 hover:text-red-900 fa fa-trash my-[10px] mr-3"></i>

        </div>
      </div>

    </>
  );
};

export default orderCard;
