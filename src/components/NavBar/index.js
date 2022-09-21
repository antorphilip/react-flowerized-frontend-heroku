import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import AuthContext from "../../contexts/auth";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/events", title: "Events" },
    { path: "/customization", title: "Customize" },
    { path: "/reviews", title: "Reviews" },
    { path: "/aboutus", title: "About Us" },
    { path: "/contactus", title: "Contact Us" },
  ];

  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="fixed w-[100%] z-[999] top-0 flex justify-between  items-center bg-[#C1A3A3] h-20">
        <div className="flex items-center">
          <button onClick={() => navigate("/")}>
            <img className="h-16 ml-3" src={logo} alt="logo " />
          </button>

          <button onClick={() => navigate("/")}>
            <h1 className="font-extrabold text-[#fff] tracking-[8px] md:block uppercase text-[29px] md:text-3xl xl:text-4xl font-ElMessiri ml-2">
              Flowerized
            </h1>
          </button>
        </div>

        <ul className="xl:flex hidden">
          {navLinks.map(function (navLink) {
            return (
              <li className="" key={navLink.title}>
                <Link to={navLink.path} className="navsLink">
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center">
          <button
            className="text-[#fff] hover:text-[#694E4E] mr-[20px] xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <i className="fa-solid fa-x fa-2x"></i>
            ) : (
              <i className="fa-solid fa-bars fa-2x"></i>
            )}
          </button>

          {user && (
            <div className="hidden lg:flex items-center">
              <p className="text-white mr-3">Hello, {user.email}</p>
              <button
                onClick={logout}
                className="bg-white px-3 py-1 rounded-lg mr-3 uppercase tracking-wide"
              >
                Logout
              </button>
            </div>
          )}

          {!user && (
            <a href="/login#Login" className="hidden xl:block">
              <i className="fa-regular fa-circle-user fa-2x iconColor mr-[30px]"></i>
            </a>
          )}
        </div>
      </nav>

      {/* mobile view */}
      <ul
        className={`z-[99] text-center pl-0 xl:hidden bg-[#C1A3A3]/90 ${
          nav ? "fixed w-full" : "hidden"
        }`}
      >
        {navLinks.map(function (navLink) {
          return (
            <li
              className="w-full py-[3vh] hover:bg-[#886F6F]"
              key={navLink.title}
            >
              <Link to={navLink.path} className="moblink ">
                {navLink.title}
              </Link>
            </li>
          );
        })}

        {/* <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "bg-[#886F6F] py-[3vh] w-full]" : "undefined]"
          }
        >
          <button className="moblink py-[3vh] hover:bg-[#886F6F] w-full">
            Login
          </button>
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "bg-[#886F6F] py-[3vh] w-full" : "undefined]"
          }
        >
          <button className="moblink py-[3vh] hover:bg-[#886F6F] w-full">
            Signup
          </button>
        </NavLink> */}
      </ul>
    </>
  );
};

export default NavBar;
