import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav class="flex justify-between  items-center bg-[#ecdce4] h-20">
            <div class="flex  items-center">
            <img class="h-16 ml-4" src="./image/logo.png" alt="logo"/>
            <h1 class="font-thin text-[#333f27] tracking-[10px] uppercase text-4xl font-[Poppins] ml-4 mt-2">
                Flowerized
            </h1>
            </div>
            

            <ul class="flex">

                {/* Home */}
                <li class="navLink">
                    <Link
                        to="/"
                        class="navLink"
                    >
                    Home
                    </Link>
                </li>

                {/* Events */}
                <li class="navLink">
                    <Link
                        to="/events"
                        class="navLink"
                    >
                    Events
                    </Link>
                </li>

                {/* Customized */}
                <li class="navLink">
                    <Link
                        to="/customized"
                        class="navLink"
                    >
                    Customized
                    </Link>
                </li>

                {/* Reviews */}
                <li class="navLink">
                    <Link
                        to="/reviews"
                        class="navLink"
                    >
                    Reviews
                    </Link>
                </li>

                {/* About Us */}
                <li class="navLink">
                    <Link
                        to="/aboutus"
                        class="navLink"
                    >
                    About Us
                    </Link>
                </li>

                {/* Contact Us */}
                <li class="navLink">
                    <Link
                        to="/contactus"
                        class="navLink"
                    >
                    Contact Us
                    </Link>
                </li>


            </ul>

            <ul class="flex">
                <li><Link
                    to="/login"
                ><i class="fa-regular fa-circle-user fa-2x iconColor mr-[30px] mt-[15px]"></i></Link></li>
            </ul>

            
        </nav>
        
        
   
  )
}

export default NavBar
