import React from "react";
import bouquet5k from "../../assets/image/5k-bouquets.webp";
import coffee from "../../assets/image/coffee.webp";
import luna from "../../assets/image/luna.webp";
import naomi from "../../assets/image/naomi.webp";
import dahlia from "../../assets/image/dahlia.webp";
import laura from "../../assets/image/laura.webp";
import mikaela from "../../assets/image/mikaela.webp";
import myrtle from "../../assets/image/myrtle.webp";
import queen from "../../assets/image/queen.webp";
import stargazer from "../../assets/image/stargazer.webp";
import summer from "../../assets/image/summer.webp";
import white from "../../assets/image/white-roses-bouquet.webp";
import yellow from "../../assets/image/yellow-ecuadorian-roses.webp";
import ProductItem from "./ProductItem";

const Product = () => {
  const featuredItems = [
    { image: bouquet5k, title: "Money Bouquets", price: 99.99 },
    { image: coffee, title: "Coffee", price: 99.99 },
    { image: luna, title: "Luna", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
    { image: dahlia, title: "Dahlia", price: 99.99 },
    { image: laura, title: "Laura", price: 99.99 },
    { image: mikaela, title: "Mikaela", price: 99.99 },
    { image: myrtle, title: "Myrtle", price: 99.99 },
    { image: queen, title: "Queen", price: 99.99 },
    { image: stargazer, title: "Naomi", price: 99.99 },
    { image: summer, title: "Summer", price: 99.99 },
    { image: white, title: "White Roses Bouquet", price: 99.99 },
    { image: yellow, title: "Yellow Ecuadorian Roses", price: 99.99 },
  ];
  return (
    <>
      <span className="text-center grid gap-x-4 lg:gap-x-16 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[20px] my-[20px] lg:my-[40px] drop-shadow-2xl">
        {featuredItems.map((featuredItem, index) => (
          <ProductItem
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

export default Product;
