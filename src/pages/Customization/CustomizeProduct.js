import React from "react";
import bouquet5k from "../../assets/image/5k-bouquets.png";
import coffee from "../../assets/image/coffee.png";
import luna from "../../assets/image/luna.png";
import naomi from "../../assets/image/naomi.png";
import CustomizeItem from "./CustomizeItem";

const CustomizeProduct = () => {
  const featuredItems = [
    { image: bouquet5k, title: "Money Bouquets", price: 99.99 },
    { image: coffee, title: "Coffee", price: 99.99 },
    { image: luna, title: "Luna", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
  ];
  return (
    <>
      <span className="text-center grid gap-x-4 lg:gap-x-16 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[20px] my-[20px] lg:my-[40px] drop-shadow-2xl">
        {featuredItems.map((featuredItem, index) => (
          <CustomizeItem
            key={featuredItem.title}
            image={featuredItem.image}
            title={featuredItem.title}
            price={featuredItem.price}
          />
        ))}
      </span>
    </>
  );
};

export default CustomizeProduct;
