import aboutus from "../../assets/image/aboutus.png";
import aboutus1 from "../../assets/image/aboutus1.jpg";
import styles from "../../styles/image.module.css";

const AboutUs = () => {
  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage2}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={aboutus1}
              alt="logo"
            />

            <div className="px-7 py-14 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[10px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold ">
                ABOUT US
              </h1>
              <div className="mt-14 space-y-20">
                <p className="font-[Alata] text-[#694E4E] text-xl">
                  The Blooms by Marra was started 8 years ago with their online
                  Facebook Page. In addition, the shop was founded by Marra's
                  mother-in-law. Ms. Marra Borres is the owner of the Blooms by
                  Marra, that was named after her. But the original name was
                  "Kitkats Flower Shop" when her mother-in-law was still
                  handling the shop. It has been a great opportunity for Ms.
                  Marra to grow and continue the business. The goal of their
                  shop is to provide the best quality of flowers with a custom
                  arrangement that will suit the customer’s preference. The
                  Blooms by Marra Shop is located at 111 Mc Arthur Highway
                  Marulas Valenzuela.
                </p>

                <img
                  className="w-[95%] mx-[auto] xl:my-5 xl:mx-5"
                  src={aboutus}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
