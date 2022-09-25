import React from "react";
import CartCard from "./cartCard";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/image.module.css";

const MyCart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[80px] pb-1"></div>
      <div className={` flex items-center justify-center ${styles.bgimage9}`}>
        <div className="w-[95%] lg:w-[70%] lg:h-[700px] mx-[auto] flex flex-col lg:flex-row my-7 rounded-xl shadow-xl overflow-hidden">
          <div className="w-[100%] lg:w-[60%] bg-[#ffff]/50">
            <h1 className="text-center pt-7 lg:pt-20 font-[Alata] text-[#472D2D] text-2xl md:text-4xl">
              Cart
            </h1>
            <div className="py-4 h-[500px] overflow-auto">
              <CartCard />
            </div>
          </div>
          <div className="w-[100%] lg:w-[40%] bg-[#ffff]/50 h-[300px] lg:h-[700px]">
            <h1 className="text-center pt-7 lg:pt-20 font-[Alata] text-[#472D2D] text-2xl md:text-4xl">
              Summary
            </h1>
            <div className="flex justify-between pt-7 lg:pt-14 px-16 ">
              <p className="font-[Alata] text-[#472D2D]">Subtotal</p>
              <p className="font-[Alata] text-[#472D2D]">199</p>
            </div>
            <div className="flex justify-between pt-14 lg:pt-32 px-16  bottom-0">
              <p className="font-[Alata] text-[#472D2D]">Total:</p>
              <p className="font-[Alata] text-[#472D2D]">199</p>
            </div>

            <div className="text-center pt-14">
              <button
                onClick={() => navigate("/checkout")}
                className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e] font-[Alata]"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mt-[80px]"></div>

      <div className="hidden lg:flex w-[70%] h-[70px] m-[auto] justify-between items-center bg-blue-200 px-14 mb-3 mt-28 rounded">
        <div className="w-[30%]">
          <h1 className="">Product</h1>
        </div>
        <div className="flex w-[70%]  justify-between px-[15px]">
          <h1 className="">Unit Price</h1>
          <h1 className="">Quantity</h1>
          <h1 className="">Total Prize</h1>
          <h1 className="">Actions</h1>
        </div>
      </div>

      <div className="pt-[10px] lg:pt-[0]">
        <CartCard />
        <div className="w-[30%]">
          <h1 className="">Product</h1>
        </div>
        <div className="flex w-[70%] justify-between">
          <h1 className="">Unit Price</h1>
          <h1 className="">Quantity</h1>
          <h1 className="">Total Prize</h1>
          <h1 className="">Actions</h1>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default MyCart;
