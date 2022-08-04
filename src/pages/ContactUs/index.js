import React from "react";
import Footer from "../../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="basis-1/2 md:block hidden">
          <img
            className="w-[95%] mx-[auto] xl:m-5 flex"
            src="./image/contact.jpg"
            alt="logo"
          />
        </div>

        <div className="basis-1/2">
          <h1 className="text-[#333f27] tracking-[13px] text-5xl uppercase font-NanumGothic mt-[10vh] text-center">
            CONTACT US
          </h1>
          <p class="text-center mt-5 text-3xl text-[#333f27] tracking-[1px] font-NanumGothic mb-3">
            Want to stay connected?
          </p>
          <p class="text-center mt-3 text-3xl text-[#333f27] tracking-[1px] font-NanumGothic mb-5">
            Reach out to us!
          </p>
          <div class="flex-col text-center">
            <a href="https://www.facebook.com/bloomsbymarra">
              <i class="fa-brands fa-facebook text-6xl mb-3 text-[#333f27]"></i>
            </a>
            <p class="font-NanumGothic text-[#333f27] tracking-[1px] text-2xl mb-5">
              Chat with us to our Official Facebook Page
            </p>
            <a href="https://www.facebook.com/bloomsbymarra">
              <i class="fa-brands fa-instagram text-6xl mb-3 text-[#333f27]"></i>
            </a>
            <p class="font-NanumGothic text-[#333f27] tracking-[1px] text-2xl mb-5">
              Slides thru DM to our Official Instagram Account
            </p>
            <i class="fa-solid fa-phone text-6xl mb-3 text-[#333f27]"></i>
            <p class="font-NanumGothic text-[#333f27] tracking-[1px] text-2xl">
              Give us a call/text: +639996040668
            </p>
            <p class="font-NanumGothic text-[#333f27] tracking-[1px] text-2xl mt-5">
              Or you can visit us at our physical store located at:
            </p>
            <div class="flex justify-center">
              <img
                class="sm:w-[40%] object-contain w-[85%] mb-4 ml-3"
                src="./image/maps.png"
                alt="Map"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
