import React from "react";
import Footer from "../../components/Footer";

const MyAccount = () => {
  return (
    <>
      <div className="mt-[80px] h-[10px]"></div>
      <div className="md:flex md:w-[70%] mx-[auto] mb-[20px]">
        <div className="bg-blue-500 w-[95%] md:w-[30%] md:h-[60vh] mt-[10px] pt-[40px] pb-[20px] mx-[auto]">
          <div className="flex justify-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-full w-40 md:w-60"
              alt="Avatar"
            />
          </div>
        </div>

        <div className="bg-blue-300 w-[95%] md:w-[70%] mx-[auto] mt-[10px] py-[20px] text-center">
          <h1 className="md:text-left md:ml-[50px] md:mt-[20px] md:mb-[50px]">
            INFORMATION
          </h1>
          <div className="text-center">
            <form>
              <div className="accountdiv">
                <h3 className="accountLabel">Name</h3>
                <input
                  className="accounttxtBox"
                  type="text"
                  name="Name"
                  placeholder=""
                ></input>
              </div>

              <div className="accountdiv">
                <h3 className="accountLabel">Email</h3>
                <input
                  className="accounttxtBox"
                  type="text"
                  name="Email"
                  placeholder=""
                ></input>
              </div>

              <div className="accountdiv">
                <h3 className="accountLabel">Contact</h3>
                <input
                  className="accounttxtBox"
                  type="text"
                  name="Contact"
                  placeholder=""
                ></input>
              </div>

              <div className="accountdiv">
                <h3 className="accountLabel">Password</h3>
                <input
                  className="accounttxtBox"
                  type="password"
                  name="Password"
                  placeholder=""
                ></input>
              </div>

              <div className="mt-[10px] md:text-right md:mr-[150px] md:mt-[30px]">
                <i className="fa-solid fa-user-pen fa-3x md:mr-[20px]"></i>
                <i className="fa-solid fa-floppy-disk fa-3x"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      {/* <div className="h-[80px] mt-[20px]"></div>

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
      </div> */}
    </>
  );
};

export default MyAccount;
