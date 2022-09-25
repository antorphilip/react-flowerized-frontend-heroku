import React from "react";
import CartCard from "./cartCard";

const MyCart = () => {
  return (
    <>
      <div className="mt-[80px] pb-1"></div>
      <div className="w-[95%] lg:w-[70%] lg:h-[700px] mx-[auto] flex flex-col lg:flex-row my-7 rounded-xl shadow-xl overflow-hidden">
        <div className="w-[100%] lg:w-[60%] bg-gray-100">
          <h1 className="text-center pt-7 lg:pt-20">Cart</h1>
          <div className="py-4">
            <CartCard />
          </div>
        </div>
        <div className="w-[100%] lg:w-[40%] bg-gray-200 h-[300px] lg:h-[700px]">
          <h1 className="text-center pt-7 lg:pt-20">Summary</h1>
          <div className="flex justify-between pt-7 lg:pt-14 px-16 ">
            <p>Subtotal</p>
            <p>199</p>
          </div>
          <div className="flex justify-between pt-14 lg:pt-32 px-16  bottom-0">
            <p>Total</p>
            <p>199</p>
          </div>

          <div className="text-center pt-14">
            <button class="w-[90%] bg-transparent hover:bg-blue-500 h-[50px] text-blue-700 font-semibold hover:text-white lg:py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Checkout
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
    </>
  );
};

export default MyCart;
