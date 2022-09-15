import React from "react";
import rhena from "../../assets/image/rhena.webp";
import mj from "../../assets/image/mj.webp";
import kian from "../../assets/image/kian.webp";
import antor from "../../assets/image/antor.webp";
import ReviewCard from "./ReviewCard";

const index = () => {
  const reviews = [
    {
      image: rhena,
      name: "Rhena Mengote",
      remarks:
        "Highly recommended! I ordered a bouquet for my boss’s wife. They’re super happy with it. Price is not that expensive yet the quality of the bouquet pang worth 5k+ sa ibang shops. 😊 Delivery, nasunod talaga yung around 9AM na arrival. Will order again next time. 🎉 Thanks sa Seller for the prompt response. God Bless.",
      bg: "#886F6F",
    },
    {
      image: mj,
      name: "MJ Pagdanganan",
      remarks:
        "I am in US and they were able to accommodate a delivery for me in the Philippines exactly how I asked. I will be using them again. Thank you soo much.",
      bg: "#C1A3A3",
    },
    {
      image: kian,
      name: "Kian Principe",
      remarks:
        "Amazing service. They are fast and always ready to entertain inquiries. Their arrangements are gorgeous and reasonably priced. For the two times I ordered, they arrived on the dot even on short notice! Thank you very much!",
      bg: "#886F6F",
    },
    {
      image: antor,
      name: "Philip Antor",
      remarks:
        "Fast replies, fast transaction, madali kausap, swak na swak sa same day delivery. This shop didn't disappoint. Tapos kudos din sa nagdeliver, buong buo yung flowers!",
      bg: "#C1A3A3",
    },
  ];

  return (
    <>
      <div className="h-[20px] mt-[80px] "></div>
      <section className="mb-20 text-gray-700 mx-[40px]">
        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold tracking-[10px] mb-6 text-[#694E4E] uppercase font-ElMessiri">
            What Our Customer are saying
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              image={review.image}
              name={review.name}
              remarks={review.remarks}
              bg={review.bg}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
