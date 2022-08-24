import { useContext } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection1";
import AuthContext from "../../contexts/auth";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <>
      <HeroSection />
      <div
        id="Login"
        className="h-[370px] flex-col justify-center items-center"
      >
        <div className="flex justify-center">
          <h1 className="tracking-[6px] font-ElMessiri text-3xl font-bold text-[#694E4E] mt-[40px]">
            CUSTOMER LOGIN
          </h1>
        </div>
        <div className="flex-col text-center">
          <form onSubmit={login}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="txt-box mt-[20px]"
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="txt-box mt-[10px]"
            />
            <br />
            <button className="btn-style">LOGIN</button>
          </form>

          <p className="mt-[30px] no-underline tracking-[1.5px] font-Alata">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline font-NanumGothic"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
