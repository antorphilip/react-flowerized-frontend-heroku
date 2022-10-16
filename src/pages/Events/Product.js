import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://flowerized-backend.herokuapp.com/api/items")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  


  return (
    <>
      <span className="text-center grid gap-x-4 lg:gap-x-16 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[20px] my-[20px] lg:my-[40px] drop-shadow-2xl">
        {productData.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            image={item.img_url}
            title={item.name}
            price={item.price}
          />
        ))}
      </span>
    </>
  );
};

export default Product;
