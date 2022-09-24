import { useState } from "react";
import { useNavigate } from "react-router-dom";
import payment from "../../assets/image/payment.webp";
import styles from "../../styles/image.module.css";

const Payment = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("credit");

  const renderDetails = () => {
    if (activeButton === "credit") {
      return (
        <div>
          <h2 className="text-2xl uppercase tracking-widest text-[#694e4e] font-bold mb-2">
            UNION BANK ACCOUNT
          </h2>
          <p className="text-[#694e4e]">
            <strong className="font-semibold">Account Number:</strong>{" "}
            12345678901
          </p>
          <p className="text-[#694e4e]">
            <strong className="font-semibold">Account Name:</strong> Cardo
            Dalisay
          </p>
        </div>
      );
    } else {
      return (
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl uppercase tracking-widest text-[#694e4e] font-bold mb-2">
              GCASH ACCOUNT
            </h2>
            <p className="text-[#694e4e]">
              <strong className="font-semibold">GCash Number:</strong>{" "}
              09123456789
            </p>
            <p className="text-[#694e4e]">
              <strong className="font-semibold">GCash Name:</strong> Cardo
              Dalisay
            </p>
          </div>

          <div>
            <h2 className="text-2xl uppercase tracking-widest text-[#694e4e] font-bold mb-2">
              MAYA ACCOUNT
            </h2>
            <p className="text-[#694e4e]">
              <strong className="font-semibold">Maya Number:</strong>{" "}
              09123456789
            </p>
            <p className="text-[#694e4e]">
              <strong className="font-semibold">Maya Name:</strong> Cardo
              Dalisay
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage8}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={payment}
              alt="logo"
            />

            <div className="px-7 py-14 w-full bg-white">
              <h1 className="text-[#694E4E] tracking-[10px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold text-center">
                Payment section
              </h1>

              <div className="mt-14 space-x-5">
                <div className="flex">
                  <button
                    className={
                      activeButton === "credit"
                        ? "text-sm w-[50%] h-[50px] md:text-xl transition ease-in bg-[#694e4e] text-white uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                        : "text-sm w-[50%] h-[50px] md:text-xl transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    }
                    // ? "px-12 py-2 transition ease-in bg-[#694e4e] text-white uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    //     : "px-12 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    onClick={() => setActiveButton("credit")}
                  >
                    CARD DETAILS
                  </button>
                  <button
                    className={
                      activeButton === "gcash"
                        ? "text-sm w-[50%] h-[50px] md:text-xl transition ease-in bg-[#694e4e] text-white uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                        : "text-sm w-[50%] h-[50px] md:text-xl transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    }
                    onClick={() => setActiveButton("gcash")}
                  >
                    E-WALLET
                  </button>
                </div>

                <div className="mt-10 text-[#694e4e]">
                  {renderDetails()}

                  <div className="mt-10 space-y-5">
                    <h2 className="text-2xl font-bold font-ElMessiri uppercase tracking-widest">
                      Please upload your proof of payment.
                    </h2>
                    <input
                      type="file"
                      className="file:bg-[#694e4e] file:rounded-xl file:text-white file:border-none file:px-7 file:py-1 file:mr-4 file:cursor-pointer font-[Alata]"
                    />
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => navigate("/")}
                        className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e] font-[Alata]"
                      >
                        Home
                      </button>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => navigate("/confirmation")}
                          className="px-3 py-2 transition ease-in bg-[#694e4e] text-white uppercase tracking-widest rounded-xl border-2 border-[#694e4e] font-[Alata]"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
