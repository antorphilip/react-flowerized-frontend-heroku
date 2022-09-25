import { BsCartPlus } from "react-icons/bs";
import { BiCustomize } from "react-icons/bi";

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
        <div className="mt-[12px] mr-[6px] flex">
          <h1 className="text-[42px] lg:text-[42px]  mr-[5px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]">
            <BsCartPlus />
          </h1>
          <h1 className="text-[42px] lg:text-[42px]  mr-[5px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]">
            <BiCustomize />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
