// Import React and Swiper dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required Swiper modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

const Slider = () => {
  return (
    <div className="border-blue-400 border-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Keep auto-slide active after interaction
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]} // Register the Autoplay module
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="">
            <img
              src={team1}
              className="h-1/2 w-full object-cover"
              alt="Team 1"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div>
            <img
              src={team2}
              className="h-1/2 w-full object-cover"
              alt="Team 2"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div>
            <img
              src={team1}
              className="h-1/2 w-full object-cover"
              alt="Team 1 Again"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
