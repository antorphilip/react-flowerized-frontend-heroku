import { useNavigate } from "react-router-dom";
import styles from "../../styles/image.module.css";

const MyCart = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[0px] mt-[80px]"></div>

      <div className={`flex items-center justify-center ${styles.bgimage5}`}>
        <div className=" w-[95%] lg:w-2/3 flex my-14 rounded-xl shadow-xl overflow-hidden">
          <div className="px-4 py-7  w-full text-center bg-white">
            <h1 className="text-[#694E4E] tracking-[10px] text-4xl uppercase font-ElMessiri font-bold mt-[20px]">
              CHECK OUT
            </h1>
            <div className="py-7 grid grid-cols-0   xl:grid-cols-2  lg:divide-x divide-y lg:divide-y-0">
              <div>
                <h1 className="text-[#694E4E] tracking-[5px] text-3xl uppercase font-[Alata] font-bold">
                  ORDER SUMMARY
                </h1>
                <div className="w-[95%] h-[200px] mx-[auto]"></div>
              </div>

              <div className="space-y-4">
                <h1 className="text-[#694E4E] tracking-[5px] text-3xl uppercase font-[Alata] font-bold mt-[20px] lg:mt-0">
                  CHECK OUT DETAILS
                </h1>

                <div className="flex flex-col lg:flex-row justify-between w-[100%] pr-0 lg:pr-8 py-2">
                  <div className="w-[90%] lg:w-[30%] mx-[auto] lg:mx-0">
                    <h3 className="font-[Alata] text-[#694E4E] lg:text-left lg:ml-[40px]">
                      Select Delivery Time and Date
                    </h3>
                  </div>
                  <div className="flex justify-between w-[100%] lg:w-[60%] text-center mt-2 lg-mt-0">
                    <input
                      type="time"
                      className="bg-[#C1A3A3] p-2 font-[Alata] uppercase rounded w-[48%] lg:w-[45%]"
                    />
                    <input
                      type="date"
                      className="bg-[#C1A3A3] p-2 font-[Alata] uppercase rounded w-[48%] lg:w-[45%]"
                    />
                  </div>
                </div>

                <form>
                  <div className="">
                    <h3 className="font-[Alata] text-[#694E4E] lg:text-left lg:ml-[40px]">
                      Sender's Name
                    </h3>
                    <input className="carttxtBox" type="text" name="Name" />
                  </div>

                  <div className="py-2">
                    <h3 className="font-[Alata] text-[#694E4E] lg:text-left lg:ml-[40px]">
                      Sender's Contact Number
                    </h3>
                    <input className="carttxtBox" type="text" name="Name" />
                  </div>

                  <div className="py-2">
                    <h3 className="font-[Alata] text-[#694E4E] lg:text-left lg:ml-[40px]  ">
                      Receiver's Name
                    </h3>
                    <input className="carttxtBox" type="text" name="Name" />
                  </div>

                  <div className="py-2">
                    <h3 className="font-[Alata] text-[#694E4E] lg:text-left lg:ml-[40px]">
                      Receiver's Contact Number
                    </h3>
                    <input className="carttxtBox" type="text" name="Name" />
                  </div>

                  <div className="py-2">
                    <h3 className="font-[Alata] text-[#694E4E] lg:text-left lg:ml-[40px]">
                      Receiver's Shipping Address
                    </h3>
                    <input className="carttxtBox" type="text" name="Name" />
                  </div>
                </form>

                <div className="flex justify-between lg:px-7 gap-4">
                  <button
                    onClick={() => navigate("/events")}
                    className="lg:px-2 lg:py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                  >
                    Continue to Shopping
                  </button>
                  <button
                    onClick={() => navigate("/greetings")}
                    className="lg:px-2 lg:py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                  >
                    Proceed to Payment
                  </button>
                </div>
                {/* <div className="flex justify-between px-7">
                  <button
                    onClick={() => navigate("/events")}
                    className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                  >
                    Continue to Shopping
                  </button>
                  <button
                    onClick={() => navigate("/greetings")}
                    className="px-2 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                  >
                    Proceed to Greetings
                  </button>
                  <div className="flex items-center space-x-3"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
