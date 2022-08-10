import React from "react";
import Footer from "../../components/Footer";
import styles from "../../styles/image.module.css";

const MyAccount = () => {
  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage3}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src="./image/myaccount.jpg"
              alt="logo"
            />

            <div className="px-7 py-14 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[10px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold ">
                MY PROFILE
              </h1>
              <form>
                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Name
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="text"
                    name="Name"
                    placeholder=""
                  ></input>
                </div>
                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Email
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="text"
                    name="Email"
                    placeholder=""
                  ></input>
                </div>
                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Contact
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="text"
                    name="Contact"
                    placeholder=""
                  ></input>
                </div>
                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Password
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="password"
                    name="Password"
                    placeholder=""
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MyAccount;
