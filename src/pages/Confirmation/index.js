import { useNavigate } from "react-router-dom";
import confirmation from "../../assets/image/confirmation.webp";
import thankyou from "../../assets/image/thankyou.webp";
import styles from "../../styles/image.module.css";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage7}`}>
          <div className="w-[90%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={confirmation}
              alt="logo"
            />

            <div className="py-14 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[8px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold ">
                CONFIRMATION
              </h1>
              <p className="py-7 px-4 text-xl md:text-2xl text-[#694E4E] tracking-[1px] font-[Alata]">
                The order has been received. You can expect to receive a SMS
                Notification from us confirming your order and informing the
                status of your order. Thank you so much!
              </p>
              <div className="mt-4 space-y-7">
                <div className="flex justify-center">
                  <img
                    className="rounded border-[7px] border-[#C1A3A3] sm:w-[70%] object-contain w-[75%] mb-4 ml-1 hover:scale-[1.05] transition-[2.5]"
                    src={thankyou}
                    alt="thanks"
                  />
                </div>
                <button
                  onClick={() => navigate("/")}
                  className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                >
                  Continue to Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
