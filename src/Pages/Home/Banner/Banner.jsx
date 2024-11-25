import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img_1 from "../../../assets/Images/Banner/Banner_1.jpg";
import img_2 from "../../../assets/Images/Banner/Banner_2.jpg";
import img_3 from "../../../assets/Images/Banner/Banner_3.jpg";
import ButtonOrange from "../../Shared/ButtonOrange/ButtonOrange";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Custom Animation Styles
import "./style.css";

const Banner = () => {
  const images = [img_1, img_2, img_3];

  return (
    <div className="relative h-[400px] md:h-[550px] lg:h-screen overflow-hidden">
      {/* Image Sliders */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative h-full w-full overflow-hidden"
          >
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center animate-zoom"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-5 lg:w-2/3">
          <h5 className="text-orange text-sm font-medium">Electronic Repair</h5>
          <h1 className="text-white text-2xl leading-9 lg:leading-tight md:text-3xl lg:text-6xl font-bold my-3 md:my-6">
            Rebuilt Your Old Electronic & Get The New Experience
          </h1>
          <p className="text-white text-xs md:text-lg lg:leading-7 font-light mb-6">
            There are many variations of passages of Electronics Services, but
            the electronics have suffered alteration electronics repair, by
            injected humour.
          </p>
          <ButtonOrange>Our Services</ButtonOrange>
        </div>
      </div>
    </div>
  );
};

export default Banner;
