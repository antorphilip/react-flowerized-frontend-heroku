import { useNavigate } from "react-router-dom";
import greetings from "../../assets/image/greetings.webp";
import styles from "../../styles/image.module.css";
import QRCode from "qrcode";
import { useState } from "react";

const Greetings = () => {
  const navigate = useNavigate("");
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#704F4F",
          light: "#FFFFFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <>
      <div className="mt-[80px]"></div>
      <div className="">
        <div className={` flex items-center justify-center ${styles.bgimage6}`}>
          <div className="w-[90%] h-[950px] sm:h-[900px] md:h-[860] lg:w-2/3 flex my-14 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[40%]"
              src={greetings}
              alt="backgroundimage"
            />

            <div className="px-7 w-full text-center bg-white">
              <h1 className="py-7 text-[#694E4E] tracking-[5px] text-2xl md:text-4xl uppercase font-ElMessiri font-bold ">
                MAKE A HEARTFUL MESSAGE TO YOUR LOVED ONES
              </h1>
              <p className="text-xl font-[Alata] text-[#694E4E]">
                You can create a short message through the dropbox below or
                upload a short video message.
              </p>
              <div class="flex justify-center">
                <div class="mb-3 w-[100%]">
                  <label
                    for="greetings"
                    class="form-label inline-block my-2 text-[#694E4E] font-[Alata]"
                  >
                    Write now!
                  </label>
                  <textarea
                    className="
        form-control
        w-[95%]
        block
        px-3
        py-1.5
        text-base
        font-[Alata]
        resize-none
        overflow-auto
        text-[#694E4E]
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-[auto]
        focus:text-[#694E4E] focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="greetings"
                    rows="3"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              <p className="py-2 text-xl font-[Alata] text-[#694E4E]">
                Or you can upload your video greetings here.
              </p>
              <input
                type="file"
                className="form-control
                block
                w-[95%]
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-[auto]
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                accept="video/*,audio/*"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <p className="pt-2 text-xl font-[Alata] text-[#694E4E]">
                QR CODE GENERATOR
              </p>
              <div className="app">
                <button
                  onClick={GenerateQRCode}
                  className="bg-[#C1A3A3] hover:bg-[#704F4F] text-white font-bold py-1 px-3 rounded inline-flex items-center my-2"
                >
                  Generate
                </button>
                <div className="w-[260px] h-[260px] border-4 border-[#472D2D] m-[auto] mb-2">
                  <img
                    src={qr}
                    alt=""
                    className="block max-w-[250px] m-[auto]"
                  />
                </div>

                {qr && (
                  <>
                    <button class="bg-[#C1A3A3] hover:bg-[#704F4F] text-white font-bold py-1 px-3 rounded inline-flex items-center my-2 ">
                      <svg
                        class="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <a
                        href={qr}
                        download="qrcode.png"
                        className="hover:text-white"
                      >
                        Download
                      </a>
                    </button>
                  </>
                )}
              </div>
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
      {/* <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage6}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={greetings}
              alt="logo"
            />

            <div className="px-7 py-24 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[5px] text-2xl md:text-4xl uppercase font-ElMessiri font-bold ">
                MAKE A HEARTFUL MESSAGE TO YOUR LOVED ONES
              </h1>
              <p className="py-2 text-xl font-[Alata] text-[#694E4E]">
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
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <br />

              <p className="py-7 text-xl font-[Alata] text-[#694E4E]">
                QR CODE GENERATOR
              </p>
              <div className="app">
                <button onClick={GenerateQRCode}>Generate</button>
                {qr && (
                  <>
                    <img
                      src={qr}
                      alt=""
                      className="block max-w-[250px] m-[auto]"
                    />
                    <a href={qr} download="qrcode.png" className="">
                      Download
                    </a>
                  </>
                )}
              </div>
              <button
                onClick={() => navigate("/payment")}
                className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Greetings;
