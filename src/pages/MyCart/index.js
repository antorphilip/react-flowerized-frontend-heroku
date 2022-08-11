import mycart from "../../assets/image/mycart.jpg";
import styles from "../../styles/image.module.css";

const MyCart = () => {
  return (
    <>
      <div className="h-[1px] mt-[80px]"></div>
      <div className="">
        <div className={`flex items-center justify-center ${styles.bgimage5}`}>
          <div className="w-[99%] lg:w-2/3 flex my-28 rounded-xl shadow-xl overflow-hidden">
            <img
              className="lg:block hidden max-w-[500px]"
              src={mycart}
              alt="logo"
            />
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
                <div>
                  <h1 className="text-[#694E4E] tracking-[5px] text-3xl md:text-xl uppercase font-[Alata] font-bold">
                    CHECK OUT DETAILS
                  </h1>
                  
                
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
