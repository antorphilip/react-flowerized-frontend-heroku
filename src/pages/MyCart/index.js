import { useNavigate } from "react-router-dom";
import styles from "../../styles/image.module.css";
import naomi from "../../assets/image/naomi.png";
import React, { useState, useEffect } from "react";

const MyCart = (props) => {
  const [carts, setCarts] = useState([]);
  const [payload, setPayloader] = useState({});
  const [hasError, setError] = useState(false);
  async function fetchCart() {
    const res = await fetch(
      "https://flowerized-backend.herokuapp.com/api/carts/"
    );
    res
      .json()
      .then((res) => {
        console.log(res.data.items);
        setCarts(res.data.items);
        setPayloader(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }
  async function increaseQty(id) {
    try {
      const res = await fetch(
        "https://flowerized-backend.herokuapp.com/api/carts/",
        {
          method: "POST",
          body: JSON.stringify({
            productId: id,
            quantity: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(res);
      fetchCart();
      alert("Item Increamented");
    } catch (err) {
      console.log(err);
    }
  }
  async function emptyCart() {
    try {
      const res = await fetch(
        "https://flowerized-backend.herokuapp.com/api/carts/",
        {
          method: "DELETE",
        }
      );
      await res.json();
      fetchCart();
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchCart();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[80px] pb-1"></div>
      <div className={` flex items-center justify-center ${styles.bgimage9}`}>
        <div className="w-[95%] lg:w-[70%] lg:h-[700px] mx-[auto] flex flex-col lg:flex-row my-7 rounded-xl shadow-xl overflow-hidden">
          <div className="w-[100%] lg:w-[60%] bg-[#ffff]/50">
            <h1 className="text-center pt-7 lg:pt-20 font-[Alata] text-[#472D2D] text-2xl md:text-4xl">
              Cart Cart
            </h1>
            <div className="py-4 h-[500px] overflow-auto">
              {carts.map((item, i) => (
                <div className="flex w-[100%] lg:w-[90%] bg-[#ffff] rounded shadow-md mx-[auto] my-3">
                  <div className="w-[150px] py-2 px-2">
                    <img
                      src={naomi}
                      className={`rounded`}
                      alt="ProductImage"
                      loading="lazy"
                    />
                    <h1 className="text-center">{props.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] lg:w-[40%] bg-[#ffff]/50 h-[300px] lg:h-[700px]">
            <h1 className="text-center pt-7 lg:pt-20 font-[Alata] text-[#472D2D] text-2xl md:text-4xl">
              Summary
            </h1>
            <div className="flex justify-between pt-7 lg:pt-14 px-16 ">
              <p className="font-[Alata] text-[#472D2D]">Subtotal</p>
              <p className="font-[Alata] text-[#472D2D]">199</p>
            </div>
            <div className="flex justify-between pt-14 lg:pt-32 px-16  bottom-0">
              <p className="font-[Alata] text-[#472D2D]">Total:</p>
              <p className="font-[Alata] text-[#472D2D]">199</p>
            </div>

            <div className="text-center pt-14">
              <button
                onClick={() => navigate("/checkout")}
                className="px-3 py-2 transition ease-in bg-white text-[#694e4e] uppercase tracking-widest rounded-xl border-2 border-[#694e4e] font-[Alata]"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
