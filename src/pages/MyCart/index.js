import { useNavigate } from "react-router-dom";
import styles from "../../styles/image.module.css";

const MyCart = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage5}`}>
          <div className="w-[99%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <div className="px-7 py-14 w-full text-center bg-white">
              <h1 className="text-[#694E4E] tracking-[10px] text-3xl md:text-4xl uppercase font-ElMessiri font-bold ">
                CHECK OUT
              </h1>
              <div class="py-14 grid grid-cols-2 divide-x">
                <div>
                  <h1 className="text-[#694E4E] tracking-[5px] text-3xl md:text-xl uppercase font-[Alata] font-bold">
                    ORDER SUMMARY
                  </h1>
                </div>
                <div className="space-y-7">
                  <h1 className="text-[#694E4E] tracking-[5px] text-3xl md:text-xl uppercase font-[Alata] font-bold">
                    CHECK OUT DETAILS
                  </h1>
                  <input
                    type="date"
                    className="bg-[#C1A3A3] p-2 font-[Alata] uppercase rounded"
                  />
                  <form>
                    <div className="cartdiv py-2">
                      <h3 className="accountLabel font-[Alata] text-[#694E4E] text-left">
                        Sender's Name
                      </h3>
                      <input className="carttxtBox" type="text" name="Name" />
                    </div>

                    <div className="cartdiv py-2">
                      <h3 className="accountLabel font-[Alata] text-[#694E4E] text-left">
                        Sender's Contact Number
                      </h3>
                      <input className="carttxtBox" type="text" name="Name" />
                    </div>

                    <div className="cartdiv py-2">
                      <h3 className="accountLabel font-[Alata] text-[#694E4E] text-left">
                        Sender's Name
                      </h3>
                      <input className="carttxtBox" type="text" name="Name" />
                    </div>

                    <div className="cartdiv py-2">
                      <h3 className="accountLabel font-[Alata] text-[#694E4E] text-left">
                        Receiver's Name
                      </h3>
                      <input className="carttxtBox" type="text" name="Name" />
                    </div>

                    <div className="cartdiv py-2">
                      <h3 className="accountLabel font-[Alata] text-[#694E4E] text-left">
                        Receiver's Contact Number
                      </h3>
                      <input className="carttxtBox" type="text" name="Name" />
                    </div>

                    <div className="cartdiv py-2">
                      <h3 className="accountLabel font-[Alata] text-[#694E4E] text-left">
                        Receiver's Shipping Address
                      </h3>
                      <input className="carttxtBox" type="text" name="Name" />
                    </div>
                  </form>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => navigate("/events")}
                      className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    >
                      Continue to Shopping
                    </button>
                    <button
                      onClick={() => navigate("/greetings")}
                      className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e]"
                    >
                      Proceed to Greetings
                    </button>
                    <div className="flex items-center space-x-3"></div>
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

export default MyCart;
