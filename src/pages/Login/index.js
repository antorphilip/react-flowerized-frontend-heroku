import React from "react";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>
        <HeroSection />
        <div
          id="Login"
          className="h-[370px] flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <h1 class="tracking-[6px] font-ElMessiri text-3xl font-bold text-[#694E4E] mt-[40px]">
              CUSTOMER LOGIN
            </h1>
          </div>
          <div className="flex-col text-center">
            <form>
              <input
                type="text"
                name="email"
                placeholder="Email"
                class="txt-box mt-[20px]"
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                class="txt-box mt-[10px]"
              />
              <br />
              <button class="btn-style">LOGIN</button>
            </form>

            <p class="mt-[30px] no-underline tracking-[1.5px] font-Alata">
              Not a member?{" "}
              <Link to="/signup" class="no-underline font-NanumGothic">
                Signup
              </Link>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Login;
