import { useState } from "react";
import myaccount from "../../assets/image/myaccount.jpg";
import styles from "../../styles/image.module.css";

const MyAccount = () => {
  const [readOnly, setReadOnly] = useState(true);

  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage3}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={myaccount}
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
                    readOnly={readOnly}
                  />
                </div>

                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Email
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="text"
                    name="Email"
                    readOnly={readOnly}
                  />
                </div>

                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Contact
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="text"
                    name="Contact"
                    readOnly={readOnly}
                  />
                </div>

                <div className="accountdiv">
                  <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                    Password
                  </h3>
                  <input
                    className="accounttxtBox"
                    type="password"
                    name="Password"
                    readOnly={readOnly}
                  />
                </div>

                <div className="mt-14">
                  <button
                    className="px-12 py-2 transition ease-in bg-[#694e4e] text-white uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    onClick={(event) => {
                      event.preventDefault();
                      setReadOnly(!readOnly);
                    }}
                  >
                    EDIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;

