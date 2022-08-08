import React from "react";

const MyAccount = () => {
  return (
    <>
      <div className="h-[80px] mt-[20px]"></div>

      <div className=" md:flex md:w-[70%] mx-[auto] text-center">
        <div className="bg-blue-400 w-[95%] md:w-[60vh] md:h-[60vh] mx-[auto] pt-[40px] pb-[20px] md:mb-[20px] md:pt-[70px]">
          <div className="flex justify-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-full w-40 md:w-60"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="py-[25px] mb-[10px] bg-blue-300 w-[95%] mx-[auto] mt-[10px] md:mt-[0] md:mb-[20px] text-2xl md:flex-col">
          <h1 className="text-left ml-[40px]">INFORMATION</h1>
          <form className="">
            <div className="mt-[10px] md:mt-[20px] md:flex justify-between">
              <label className="block md:inline md:ml-[10%]">Name</label>
              <input
                className="w-[95%] md:w-[60%] h-[50px] rounded text-2xl md:mr-[10%]"
                type="text"
                name="Name"
                placeholder=""
                class=""
              />
            </div>

            <div className="mt-[10px] md:mt-[20px] md:flex justify-between">
              <label className="block md:inline md:ml-[10%]">Email</label>
              <input
                className="w-[95%] md:w-[60%] h-[50px] rounded text-2xl md:mr-[10%]"
                type="text"
                name="Email"
                placeholder=""
                class=""
              />
            </div>

            <div className="mt-[10px] md:mt-[20px] md:flex justify-between">
              <label className="block md:inline md:ml-[10%]">Contact</label>
              <input
                className="w-[95%] md:w-[60%] h-[50px] rounded text-2xl md:mr-[10%]"
                type="text"
                name="Contact"
                placeholder=""
                class=""
              />
            </div>

            <div className="mt-[10px] md:mt-[20px] md:flex justify-between">
              <label className="block md:inline md:ml-[10%]">Password</label>
              <input
                className="w-[95%] md:w-[60%] h-[50px] rounded text-2xl md:mr-[10%]"
                type="password"
                name="Password"
                placeholder=""
                class=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
