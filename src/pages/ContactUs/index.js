import React from "react";
import Footer from "../../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="h-[1px] md:h-[0px] mt-[80px]"></div>
      <div className="mt-[80px]">
        <div className="flex justify-center">
          <div className="basis-1/2 lg:block hidden">
            <img
              className="rounded border-[7px] border-[#C1A3A3] w-[95%] mx-[auto] xl:m-5 flex"
              src="./image/contact.jpg"
              alt="logo"
            />
          </div>

          <div className="basis-1/2 md:mt-[40px]">
            <h1 className="text-[#694E4E] tracking-[10px] text-5xl md:text-6xl uppercase font-ElMessiri font-bold text-center">
              CONTACT US
            </h1>
            <p className="text-center mt-5 text-3xl text-[#694E4E] tracking-[1px] font-Courgette mb-3">
              Want to stay connected?
            </p>
            <p className="text-center mt-3 text-3xl text-[#694E4E] tracking-[1px] font-Courgette mb-5">
              Reach out to us!
            </p>
            <div className="flex-col text-center">
              <a href="https://www.facebook.com/bloomsbymarra">
                <i className="fa-brands fa-facebook text-6xl mb-3 text-[#694E4E] hover:text-[#C1A3A3] hover:scale-[1.1] transition-[2.5]"></i>
              </a>
              <p className="font-Alata text-[#694E4E] tracking-[1px] text-2xl mb-5">
                Chat with us to our Official Facebook Page
              </p>
              <a href="https://www.facebook.com/bloomsbymarra">
                <i className="fa-brands fa-instagram text-6xl mb-3 text-[#694E4E] hover:text-[#C1A3A3] hover:scale-[1.1] transition-[2.5]"></i>
              </a>
              <p className="font-Alata text-[#694E4E] tracking-[1px] text-2xl mb-5">
                Slides thru DM to our Official Instagram Account
              </p>
              <i className="fa-solid fa-phone text-6xl mb-3 text-[#694E4E] hover:text-[#C1A3A3] hover:scale-[1.1] transition-[2.5]"></i>
              <p className="font-Alata text-[#694E4E] tracking-[1px] text-2xl">
                Give us a call/text: +639996040668
              </p>
              <p className="font-Alata text-[#694E4E] tracking-[1px] text-2xl mt-5">
                Or you can visit us at our physical store located at:
              </p>
              <div className="flex justify-center">
                <img
                  className="rounded border-[7px] border-[#C1A3A3] sm:w-[40%] object-contain w-[85%] mb-4 ml-3 hover:scale-[1.5] transition-[2.5]"
                  src="./image/maps.png"
                  alt="Map"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
