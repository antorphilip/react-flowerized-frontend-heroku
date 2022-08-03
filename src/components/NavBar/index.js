import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/events", title: "Events" },
    { path: "/customize", title: "Customize" },
    { path: "/reviews", title: "Reviews" },
    { path: "/aboutus", title: "About Us" },
    { path: "/contactus", title: "Contact Us" },
  ];

  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="flex justify-between  items-center bg-gradient-to-r from-[#f5d3e4] to-[#ecdce4] h-20">
        <div className="flex items-center">
          <img className="h-16 ml-4" src="./image/logo.png" alt="logo" />
          <h1 className="font-light text-[#333f27] tracking-[10px] uppercase text-4xl font-Cinzel ml-4 mt-2">
            Flowerized
          </h1>
        </div>

        <ul className="md:flex hidden">
          {navLinks.map(function (navLink) {
            return (
              <li className="navLink">
                <Link to={navLink.path} className="navLink">
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div>
          <button className="md:hidden" onClick={() => setNav(!nav)}>
            {nav ? (
              <i class="fa-solid fa-x fa-2x"></i>
            ) : (
              <i className="fa-solid fa-bars fa-2x"></i>
            )}
          </button>
          <a className="hidden md:block" href="#Login">
            <i className="fa-regular fa-circle-user fa-2x iconColor mr-[30px]"></i>
          </a>
        </div>
      </nav>
      <ul className={`md:hidden bg-[#f5d3e4] ${nav ? "block" : "hidden"}`}>
        {navLinks.map(function (navLink) {
          return (
            <li className="">
              <Link to={navLink.path} className="no-underline text-[#333f27]">
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
