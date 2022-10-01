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
        <div className="items-center absolute ml-3">
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
        </div>
        <div className="flex items-center ml-12">
          <button onClick={() => navigate("/")}>
            <img className="h-14" src={logo} alt="logo " />
          </button>

          <button onClick={() => navigate("/")}>
            <h1 className="hidden sm:block font-extrabold text-[#fff] tracking-[8px] text-[29px] md:text-3xl xl:text-4xl font-ElMessiri uppercase ml-2">
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
        {!user && (
          <div>
            <a
              href="/login#Login"
              className="block bg-white px-3 py-1 rounded-lg mr-3 uppercase tracking-wide"
            >
              Login
            </a>
          </div>
        )}
        {user && (
          <div className="flex mr-2 sm:mr-4">
            <i className="fa-solid fa-cart-shopping mr-4 fa-2x iconColor "></i>
            <div class="flex justify-center">
              <div>
                <div class="dropdown relative">
                  <i
                    className="fa-solid fa-user fa-2x iconColor"
                    type="button"
                    id="dropdownMenuButton1d"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>

                  <ul
                    className="
                    cursor-pointer
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                    aria-labelledby="dropdownMenuButton1d"
                  >
                    <li>
                      <button
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        onClick={() => navigate("/myaccount")}
                      >
                        MyAccount
                      </button>
                    </li>

                    <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                    <li>
                      <button
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

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
      </ul>
    </>
  );
};

export default NavBar;
