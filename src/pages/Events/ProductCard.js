// import { useNavigate } from "react-router-dom";
// const ProductCard = (props) => {
//   const navigate = useNavigate();

//   // async function addToCart(id, quantity, price) {
//   //   try {
//   //     const response = await fetch(
//   //       "https://flowerized-backend.herokuapp.com/api/carts/",
//   //       {
//   //         method: "POST",
//   //         body: JSON.stringify({
//   //           productId: id,
//   //           quantity: quantity,
//   //           productPrice: price,
//   //         }),
//   //         headers: {
//   //           "Content-type": "application/json; charset=UTF-8",
//   //         },
//   //       }
//   //     );
//   //     let data = await response.json();
//   //     alert("Item Added To Cart");
//   //     console.log(data);
//   //   } catch (err) {
//   //     alert("Something Went Wrong");
//   //     console.log(err);
//   //   }
//   // }

//   return (
//     <>
//       <div className="w-[100%]">
//         <img
//           src={props.image}
//           className={`rounded giu hover:scale-[1.01] transition-[2.5]`}
//           alt="ProductImage"
//           loading="lazy"
//         />
//         <div className="flex place-content-between text-left ">
//           <div className="text-[11px] lg:text-xl font-[Alata] font-light mt-[5px] ml-[8px]">
//             <p className="text-[#694E4E]">{props.title}</p>
//             <p className="text-[#886F6F]">
//               {Intl.NumberFormat("ph-PH", {
//                 style: "currency",
//                 currency: "PHP",
//               }).format(props.price)}
//             </p>
//           </div>
//           <div className="mt-[12px] mr-[6px]">
//             <i
//               className="fa-solid fa-cart-plus fa-xl lg:text-[32px]  mr-[5px] lg:mr-[20px] text-[#694E4E] hover:scale-[1.1] transition-[2.5]"
//               // onClick={(e) => addToCart(props._id, 1)}
//             ></i>
//             <i
//               className="fa-solid fa-pen-to-square fa-xl lg:text-[32px]  text-[#694E4E] hover:scale-[1.1] transition-[2.5]"
//               onClick={() => navigate("/customize")}
//             ></i>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;
