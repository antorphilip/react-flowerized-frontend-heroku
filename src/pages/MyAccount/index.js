import myaccount from "../../assets/image/myaccount.webp";
import styles from "../../styles/image.module.css";
import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/auth";

const MyAccount = () => {
  const [readOnly, setReadOnly] = useState(true);
  const { user } = useContext(AuthContext);

  const url = "https://flowerized-backend.herokuapp.com/api/users";

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.pasword.email.value,
        }),
      });

      if (response.status === 200) {
        alert("Update successfully.");
      }
    } catch (e) {
      alert("Network Error");
    }
  };

  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>

      <div className={`flex items-center justify-center ${styles.bgimage3}`}>
        <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
          <img
            className="lg:block hidden max-w-[500px]"
            src={myaccount}
            alt="logo"
          />

          <div className="px-7 py-20 md:py-44 w-full text-center bg-white">
            <h1 className="text-[#694E4E] tracking-[10px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold ">
              MY PROFILE
            </h1>
            <form onSubmit={updateUser}>
              <div className="accountdiv">
                <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                  Name
                </h3>
                <input
                  // value={user.name}
                  className="accounttxtBox"
                  type="text"
                  name="Name"
                  readOnly={readOnly}
                ></input>
              </div>

              <div className="accountdiv">
                <h3 className="accountLabel font-[Alata] text-[#694E4E]">
                  Email
                </h3>
                <input
                  // value={user.email}
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
                <button className="px-12 py-2 transition ease-in bg-[#694e4e] text-white uppercase tracking-widest rounded-xl border-2 border-[#694e4e] sm:ml-[100px]">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
