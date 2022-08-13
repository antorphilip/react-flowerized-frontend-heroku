import React from "react";
import HeroSection from "../../components/HeroSection";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div>
        <HeroSection />

        <div
          id="Signup"
          className="h-[430px] flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <h1 className="tracking-[6px] font-ElMessiri text-3xl font-bold text-[#694E4E] mt-[40px]">
              SIGNUP NOW
            </h1>
          </div>
          <div className="flex-col text-center">
            <form>
              <input
                type="text"
                name="email"
                placeholder="Fullname"
                className="txt-box mt-[20px]"
              />
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="txt-box mt-[10px]"
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="txt-box mt-[10px]"
              />
            </form>

            <button className="btn-style">SIGNUP</button>
            <p className="mt-[30px] no-underline tracking-[1.5px] font-Alata">
              Already have an account?{" "}
              <Link to="/login" className="no-underline font-NanumGothic">
                Login
              </Link>
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Signup;
