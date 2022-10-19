import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import ProductCard from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://flowerized-backend.herokuapp.com/api/items/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  async function addToCart(id, quantity) {
    try {
      const response = await fetch(
        "https://flowerized-backend.herokuapp.com/api/addcarts/",
        {
          method: "POST",
          body: JSON.stringify({
            productId: id,
            quantity: quantity,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      let data = await response.json();
      alert("Item Added To Cart");
      console.log(data);
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }

  return (
    <>
      <span className="text-center grid gap-x-4 lg:gap-x-16 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[20px] my-[20px] lg:my-[40px] drop-shadow-2xl">
        {products.map((product, i) => (
          <div className="w-[100%]">
            <img
              src={product.img_url}
              className={`rounded giu hover:scale-[1.01] transition-[2.5]`}
              alt="ProductImage"
              loading="lazy"
            />
            <div className="flex place-content-between text-left ">
              <div className="text-[11px] lg:text-xl font-[Alata] font-light mt-[5px] ml-[8px]">
                <p className="text-[#694E4E]">{product.name}</p>
                <p className="text-[#886F6F]">
                  {Intl.NumberFormat("ph-PH", {
                    style: "currency",
                    currency: "PHP",
                  }).format(product.price)}
                </p>
              </div>
              <div className="mt-[12px] mr-[6px]">
                <i
                  className="fa-solid fa-cart-plus fa-xl lg:text-[32px]  mr-[5px] lg:mr-[20px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]"
                  onClick={(e) => addToCart(product._id, 1)}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square fa-xl lg:text-[32px]  text-[#694E4E] hover:scale-[1.1] transition-[2.5]"
                  onClick={() => navigate("/customize")}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </span>
    </>
  );
};

export default Products;
