// import { BsCartPlus } from "react-icons/bs";
// import { BiCustomize } from "react-icons/bi";

const FeaturedItem = ({ image, title, price }) => {
  return (
    <div className="w-[100%] ">
      <img
        src={image}
        className={`rounded drop-shadow-xl hover:scale-[1.04] transition-[2.5]`}
        alt="featured"
        loading="lazy"
      />
      <div className="flex place-content-between text-left ">
        <div className="text-xl font-[Alata] font-light mt-[5px] ml-[8px]">
          <p className="text-[#694E4E]">{title}</p>
          <p className="text-[#886F6F]">
            {Intl.NumberFormat("ph-PH", {
              style: "currency",
              currency: "PHP",
            }).format(price)}
          </p>
        </div>
        <div className="mt-[12px] mr-[6px]">
          <i className="fa-solid fa-cart-plus fa-3x mr-[20px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]"></i>
          <i className="fa-solid fa-pen-to-square fa-3x text-[#694E4E] hover:scale-[1.1] transition-[2.5]"></i>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
