import contact from "../../assets/image/contact.jpg";
import maps from "../../assets/image/maps.png";
import styles from "../../styles/image.module.css";

const ContactUs = () => {
  return (
    <>
      <div className="h-[0px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage}`}>
          <div className="w-[90%] lg:w-2/3 flex my-16 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={contact}
              alt="logo"
            />

            <div className="px-7 py-14 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[10px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold ">
                CONTACT US
              </h1>
              <p className=" text-2xl text-[#694E4E] tracking-[1px] font-[Alata]">
                Want to stay connected? Reach out to us!
              </p>
              <div className="mt-14 space-y-7">
                <div className="flex space-x-5 items-center">
                  <a href="https://www.facebook.com/bloomsbymarra">
                    <i className="fa-brands fa-facebook text-6xl mb-3 text-[#694E4E] hover:text-[#C1A3A3] hover:scale-[1.1] transition-[2.5]"></i>
                  </a>
                  <p className="font-[Alata] text-[#694E4E] tracking-[1px] text-xl">
                    Chat with us to our Official Facebook Page
                  </p>
                </div>
                <div className="flex space-x-5 items-center">
                  <a href="https://www.facebook.com/bloomsbymarra">
                    <i className="fa-brands fa-instagram text-6xl text-[#694E4E] hover:text-[#C1A3A3] hover:scale-[1.1] transition-[2.5]"></i>
                  </a>
                  <p className="font-[Alata] text-[#694E4E] tracking-[1px] text-xl">
                    Slides thru DM to our Official Instagram Account
                  </p>
                </div>
                <div className="flex space-x-5 items-center">
                  <i className="fa-solid fa-phone text-6xl text-[#694E4E] hover:text-[#C1A3A3] hover:scale-[1.1] transition-[2.5]"></i>
                  <p className="font-[Alata] text-[#694E4E] tracking-[1px] text-xl">
                    Give us a call/text: +639996040668
                  </p>
                </div>

                <p className="font-[Alata] text-[#694E4E] tracking-[1px] text-xl">
                  Or you can visit us at our physical store located at:
                </p>
                <div className="flex justify-center">
                  <img
                    className="rounded border-[7px] border-[#C1A3A3] sm:w-[40%] object-contain w-[85%] mb-4 ml-3 hover:scale-[1.5] transition-[2.5]"
                    src={maps}
                    alt="Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
