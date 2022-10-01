// import { BsCartPlus } from "react-icons/bs";
// import { BiCustomize } from "react-icons/bi";
const ProductItem = ({ image, title, price }) => {
  return (
    <>
      <div className="w-[100%]">
        <img
          src={image}
          className={`rounded giu hover:scale-[1.01] transition-[2.5]`}
          alt="ProductImage"
          loading="lazy"
        />
        <div className="flex place-content-between text-left ">
          <div className="text-[11px] lg:text-xl font-[Alata] font-light mt-[5px] ml-[8px]">
            <p className="text-[#694E4E]">{title}</p>
            <p className="text-[#886F6F]">
              {Intl.NumberFormat("ph-PH", {
                style: "currency",
                currency: "PHP",
              }).format(price)}
            </p>
          </div>
          <div className="mt-[12px] mr-0 flex">
            <h1 className="text-[20px] lg:text-[32px]  mr-[5px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]">
              {/* <BsCartPlus /> */}
            </h1>
            <h1 className="text-[20px] lg:text-[32px]  mr-[5px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]">
              {/* <BiCustomize /> */}
            </h1>
            {/* <i className="fa-solid fa-cart-plus fa-xl lg:text-[32px]  mr-[5px] lg:mr-[20px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]"></i> */}
            {/* <i className="fa-solid fa-pen-to-square fa-xl lg:text-[32px]  text-[#694E4E] hover:scale-[1.1] transition-[2.5]"></i> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
