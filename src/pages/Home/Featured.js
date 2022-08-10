import bouquet5k from "../../assets/image/5k-bouquets.png";
import coffee from "../../assets/image/coffee.png";
import luna from "../../assets/image/luna.png";
import naomi from "../../assets/image/naomi.png";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  const featuredItems = [
    { image: bouquet5k, title: "Money Bouquets", price: 99.99 },
    { image: coffee, title: "Coffee", price: 99.99 },
    { image: luna, title: "Luna", price: 99.99 },
    { image: naomi, title: "Naomi", price: 99.99 },
  ];

  return (
    <>
      <div>
        <h1 className="before:content-[''] after:content-[''] titleClass text-[#694E4E]">
          Featured
        </h1>
      </div>
      <span className="text-center grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-[40px] my-[70px] ">
        {featuredItems.map((featuredItem, index) => (
          <FeaturedItem
            key={featuredItem.title}
            image={featuredItem.image}
            title={featuredItem.title}
            price={featuredItem.price}
            border={index % 2 === 0 ? "#886F6F" : "#C1A3A3"}
          />
        ))}
      </span>
    </>
  );
};

export default Featured;
