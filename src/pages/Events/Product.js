import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const Product = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://flowerized-backend.herokuapp.com/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <span className="text-center grid gap-x-4 lg:gap-x-16 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[20px] my-[20px] lg:my-[40px] drop-shadow-2xl">
        {items &&
          items.map((item) => (
            <ProductItem
              key={item.id}
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
