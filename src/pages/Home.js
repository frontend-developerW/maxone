import React from "react";
import Card from "../components/Card";
import { categorys } from "../utils";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Cocie } from "../components/Svgs";
import { Link } from "react-router-dom";
function Home() {
  let slides = [
    <div className="mt-[8vw] mb-[5vw]">
      <div className="flex bg-[#004B99] w-[80vw] m-auto p-[3vw] rounded-[2vw] relative min-h-[25vw]">
        <div className="flex flex-col">
          <h1 className="m-bold text-center text-[#ffffff] text-[3vw] ">
            Nokia 1510
          </h1>
          <p className="text-[#fff] text-[1.4vw]">
            Qulaylikni Nokia1510 bilan his qiling
          </p>
          
          <a href="#" className="text-[#ffffff9f] text-[1.4vw] mt-[6vw]">
            Batafsil o`qish
          </a>
        </div>
        <img
          src={require("../assets/img/nokia.png")}
          className="absolute bottom-0 right-[3vw] w-[25vw]"
          alt="1"
        />
      </div>
    </div>,
    <div className="mt-[8vw] mb-[5vw]">
      <div className="flex bg-[#004B99] w-[80vw] m-auto p-[3vw] rounded-[2vw] relative min-h-[25vw]">
        <div className="flex flex-col">
          <h1 className="m-bold text-center text-[#ffffff] text-[3vw] ">
            Nokia 1510
          </h1>
          <p className="text-[#fff] text-[1.4vw]">
            Qulaylikni Nokia1510 bilan his qiling
          </p>
          
          <a href="#" className="text-[#ffffff9f] text-[1.4vw] mt-[6vw]">
            Batafsil o`qish
          </a>
        </div>
        <img
          src={require("../assets/img/nokia.png")}
          className="absolute bottom-0 right-[3vw] w-[25vw]"
          alt="1"
        />
      </div>
    </div>,
    <div className="mt-[8vw] mb-[5vw]">
      <div className="flex bg-[#004B99] w-[80vw] m-auto p-[3vw] rounded-[2vw] relative min-h-[25vw]">
        <div className="flex flex-col">
          <h1 className="m-bold text-center text-[#ffffff] text-[3vw] ">
            Nokia 1510
          </h1>
          <p className="text-[#fff] text-[1.4vw]">
            Qulaylikni Nokia1510 bilan his qiling
          </p>
          
          <a href="#" className="text-[#ffffff9f] text-[1.4vw] mt-[6vw]">
            Batafsil o`qish
          </a>
        </div>
        <img
          src={require("../assets/img/nokia.png")}
          className="absolute bottom-0 right-[3vw] w-[25vw]"
          alt="1"
        />
      </div>
    </div>
  ];
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((item) => (
          <SwiperSlide>{item}</SwiperSlide>
        ))}
      </Swiper>
      <h1 className="m-bold text-center text-[#006BC5] text-[3vw]">
        Katigoriyalar
      </h1>
      <div className="p-[7vw] pt-[3vw] grid justify-between gap-[4vw] grid-cols-4">
        {categorys.map((item) => (
          <Link to='/brands'>
            <div className="flex flex-col items-center cursor-pointer">
              {item.icon}
              <p className="mt-[1vw] text-[#0066BE] text-[1.3vw]">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="shadow flex items-center gap-[1vw] bg-[#fff] p-[.5vw] rounded-[4vw] w-[32vw] justify-between m-auto mb-[4vw]">
        <Cocie />
        <p className="n-regular text-[1.2vw] text-[#004B99]">
          This website use cookies. Learn moree{" "}
        </p>
        <button className="bg-[#004B99] n-regular p-[.2vw] w-[4vw] text-[#fff] rounded-[3vw]">
          ok
        </button>
      </div>
      <h1 className="m-bold text-center text-[#006BC5] text-[3vw]">
        Best seller tovarlar
      </h1>
      <div className="p-[7vw] pt-0">
        <div className="grid justify-between p-[3vw] bg-[#9DCAF8] gap-[2vw] grid-cols-4 rounded-[3vw]">
          {[1, 2, 3, 4].map((item) => (
            <Card />
          ))}
        </div>
      </div>
      <div className="grid justify-between p-[7vw] gap-[2vw] grid-cols-4 pt-0">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Home;
