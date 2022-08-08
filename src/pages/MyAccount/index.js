import React from "react";
import Footer from "../../components/Footer";

const MyAccount = () => {
  return (
    <>
      <div className="mt-[80px] h-[10px]"></div>
      <div className="md:flex md:w-[70%] md:w-[70%] mx-[auto] mb-[20px]">
        <div className="bg-blue-500 w-[95%] md:w-[30%] md:h-[75vh] mt-[10px] pt-[40px] pb-[20px] mx-[auto]">
          <div className="flex justify-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-full w-40 md:w-60"
              alt="Avatar"
            />
          </div>
        </div>

        <div className="bg-blue-300 w-[95%] md:w-[70%] md:h-[75vh] mx-[auto] mt-[10px] py-[20px] text-center">
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
    </>
  );
};

export default MyAccount;
