const ProductItem = ({ image, title, price }) => {
  return (
    <>
      <div className="w-[100%]">
        <img
          src={image}
          className={`rounded border-[5px] lg:border-[6px] border-[#886F6F] hover:scale-[1.01] transition-[2.5]`}
          alt="featured"
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
          <div className="mt-[12px] mr-[6px]">
            <i className="fa-solid fa-cart-plus fa-xl lg:text-[32px]  mr-[5px] lg:mr-[20px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]"></i>
            <i className="fa-solid fa-pen-to-square fa-xl lg:text-[32px]  text-[#694E4E] hover:scale-[1.1] transition-[2.5]"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
