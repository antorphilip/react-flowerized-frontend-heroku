import { useNavigate } from "react-router-dom";
import greetings from "../../assets/image/greetings.webp";
import styles from "../../styles/image.module.css";

const Greetings = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage6}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={greetings}
              alt="logo"
            />

            <div className="px-7 py-14 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[5px] text-2xl md:text-4xl uppercase font-ElMessiri font-bold ">
                MAKE A HEARTFUL MESSAGE TO YOUR LOVED ONES
              </h1>
              <p className="py-7 text-xl font-[Alata] text-[#694E4E]">
                You can create a short message through the dropbox below or
                upload a short video message.
              </p>

              <div class="flex justify-center">
                <div class="mb-3 xl:w-[95%]">
                  <label
                    for="greetings"
                    class="form-label inline-block mb-2 text-[#694E4E] font-[Alata]"
                  >
                    Write now!
                  </label>
                  <textarea
                    class="
        form-control
        w-[330px]
        md:w-[100%]
        block
        px-3
        py-1.5
        text-base
        font-[Alata]
        text-[#694E4E]
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-[#694E4E] focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="greetings"
                    rows="3"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              <p className="py-7 text-xl font-[Alata] text-[#694E4E]">
                Or you can upload your video greetings here.
              </p>
              <input
                type="file"
                className="font-[Alata] text-[#694E4E]"
                accept="video/*,audio/*"
              />

              <p className="py-7 text-xl font-[Alata] text-[#694E4E]">
                QR CODE GENERATOR
              </p>

              <button
                onClick={() => navigate("/payment")}
                className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greetings;
