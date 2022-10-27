import React, { useState } from "react";
import redcarn from "../../assets/image/red-carn.png";

function FocalFlower() {
  const [isClose, setisClose] = useState(true);
  const handleButtonToggle = () => setisClose(!isClose);
  return (
    <>
      {isClose ? (
        <div className="top-0 right-0 fixed bg-[#FFFFFF] w-[90%] sm:w-[27vw] h-full z-[999] text-xl shadow-xl">
          <div className="bg-[#E5E5E5]">
            <i
              className="fa-solid fa-chevron-left absolute p-4"
              onClick={handleButtonToggle}
            ></i>
            <p className="text-center py-4">Focal Flower</p>
            <hr />

            <div className="w-full bg-[#FFFFFF] hover:bg-[#E5E5E5]">
              <div className="w-full h-[120px] flex">
                <div className="flex-col pl-4 py-2 w-[75%]">
                  <p className="font-[Atlata] font-bold text-3xl">Carnations</p>
                  <p className="font-KaushanScript text-base">
                    Known for Fascination and Distinction
                  </p>
                  <p className="font-[Atlata] font-bold text-2xl pt-2">
                    150.00
                  </p>
                </div>
                <div className="w-[25%] h-full">
                  <img
                    src={redcarn}
                    className={`rounded mx-[auto] h-full`}
                    alt="Flower"
                    loading="lazy"
                  />
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FocalFlower;
