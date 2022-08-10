import carousel1 from "../../assets/image/carousel-1.png";
import carousel2 from "../../assets/image/carousel-2.png";
import carousel3 from "../../assets/image/carousel-3.png";
import carousel4 from "../../assets/image/carousel-4.png";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Reviews from "../../components/Reviews";
import Featured from "./Featured";

const Home = () => {
  return (
    <div className="mt-[80px]">
      <HeroSection />
      <Featured />

      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative w-[95%] m-[auto] shadow-xl"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 transition-[2.5] ">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade "
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade "
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden h-[full]">
          <div className="carousel-item active float-left w-full">
            <img
              src={carousel1}
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={carousel2} className="block w-full" alt="Camera" />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={carousel3}
              className="block w-full h-[full]"
              alt="Exotic Fruits"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={carousel4} className="block w-full" alt="Exotic Fruits" />
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
