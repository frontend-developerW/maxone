import React, { useEffect, useCallback, useState } from "react";
import Card from "../components/Card";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Cocie } from "../components/Svgs";
import { Link } from "react-router-dom";
import {
  getBestProducts,
  getCategorys,
  getProducts,
  getSliders,
  getTypes
} from "../requests";
import { useLanguage } from "../redux/selectors";
import CookieConsent from "react-cookie-consent";
function Home() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [types, setTypes] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [page, setPage] = useState(8);
  const { currentLang, language, searchValue } = useLanguage();
  function getPreviousMonday() {
    var date = new Date();
    var day = date.getDay();
    var prevMonday = new Date();
    if (date.getDay() == 0) {
      prevMonday.setDate(date.getDate() - 7);
    } else {
      prevMonday.setDate(date.getDate() - (day - 1));
    }

    return prevMonday.toLocaleDateString();
  }
  const getData = useCallback(async () => {
    try {
      const product = await getProducts();
      setProducts(product?.data);
      const category = await getCategorys();
      setCategorys(category?.data);
      const bestProduct = await getBestProducts();
      setBestProducts(bestProduct?.data);
      const slider = await getSliders();
      setSliders(slider?.data);

      const type = await getTypes();
      setTypes(type?.data);
    } catch (e) {
      console.log("Error", e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  let slides = sliders.map((slider) => (
    <div className="mt-[8vw] mb-[5vw]">
      <div className="flex bg-gradient-to-tr  from-[#0074E7] via-[#004B99] to-[#0074E7] md:h-auto h-[35vw] md:w-[75vw] w-[90vw] m-auto p-[3vw] rounded-[2vw] relative min-h-[22vw]">
        <div className="flex flex-col">
          <h1 className="m-bold text-left text-[#ffffff] md:text-[3vw] text-[6vw] md:w-[100%] w-[60vw] ">
            {slider?.[`name_${currentLang}`]}
          </h1>
          <p className="text-[#fff] md:text-[1.4vw] text-[2.3vw]  whitespace-nowrap">
            {slider?.[`description_${currentLang}`]}
          </p>

          <a
            href="#"
            className="text-[#ffffff9f]  md:text-[1.4vw] text-[2.3vw] md:mt-[6vw] mt-[3vw]"
          >
            {language["batafsil"]}
          </a>
        </div>
        <img
          src={slider?.image}
          className="absolute bottom-0 right-[3vw] md:w-[21vw] w-[33vw]"
          alt="1"
        />
      </div>
    </div>
  ));
  window.onscroll = function () {
    if (window.scrollY + 1200 > document.body.offsetHeight) {
      setPage(page + 4);
    }
  };
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <h1 className="m-bold md:mt-0 mt-[5vw] text-center text-[#006BC5] md:text-[3vw] text-[5vw]">
        {language["f_3"]}
      </h1>
      <div className="p-[7vw] pt-[3vw] grid justify-between gap-[4vw] md:grid-cols-4 grid-cols-3" id="brands">
        {categorys?.map((item, i) => (
          <Link
            to={"/brands/" + item?.id}
            key={i}
            onClick={() => localStorage.setItem("category", item?.id)}
          >
            <div className="flex flex-col items-center cursor-pointer hover:opacity-70">
              <img
                src={`https://api.maxone.uz${
                  item?.image || "/files/111_1aBNoct.png"
                }`}
                className={
                  "md:w-[10vw] md:h-[10vw] w-[17vw] h-[17vw] object-cover rounded-[15vw]"
                }
                alt=""
              />
              <p className="mt-[1vw] text-[#0066BE] md:text-[1.3vw] text-[2.3vw]">
                {item?.[`name_${currentLang}`]}
              </p>
            </div>
          </Link>
        ))}
        {types?.map((item, i) => (
          <Link
            to={"/brands/" + item?.id}
            key={i}
            onClick={() => localStorage.setItem("type", item?.id)}
          >
            <div className="flex flex-col items-center cursor-pointer hover:opacity-70">
              <img
                src={`${
                  item?.image || "https://api.maxone.uz/files/111_1aBNoct.png"
                }`}
                className={
                  "md:w-[10vw] md:h-[10vw] w-[17vw] h-[17vw] object-cover rounded-[15vw]"
                }
                alt=""
              />
              <p className="mt-[1vw] text-[#0066BE] md:text-[1.3vw] text-[2.3vw]">
                {item?.[`name_${currentLang}`]}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="shadow flex items-center gap-[1vw] bg-[#fff] p-[.5vw] rounded-[4vw] w-[32vw] justify-between m-auto mb-[4vw]">
     <Cocie />
     <p className="n-regular text-[1.2vw] text-[#004B99]">
       This website use cookies. Learn moree{" "}
     </p>
     <button className="bg-[#004B99] n-regular p-[.2vw] w-[4vw] text-[#fff] text-[1.2vw] rounded-[3vw]">
       ok
     </button>
   </div> */}
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="maxone"
        style={{ background: "#fff", flexWrap: "nowrap" }}
        buttonStyle={{ color: "#fff", backgroundColor: "#004B99" }}
        buttonClasses="bg-[#004B99] n-regular p-[.2vw] md:w-[4vw] text-[#fff] md:text-[2vw] text-[4vw] rounded-[3vw] relative md:left-0 left-[-15vw] ml-0"
        expires={150}
      >
        <p className="n-regular md:text-[2vw] text-[4vw] text-[#004B99] ">
          This website use cookies. Learn moree{" "}
        </p>
      </CookieConsent>
      <div className="px-[12vw] py-[5vw] relative">
        <h1 className="m-bold text-center text-[#006BC5] md:text-[2.4vw] text-[5vw] capitalize">
          {language["w"]}
        </h1>
        <div className="md:absolute p-[.5vw] items-center px-[2vw] rounded-[1vw] bg-[#8cc5ff81] right-[7vw] top-[5vw] flex flex-col md:w-auto w-[35vw] m-auto">
          <p className="text-[#006BC5] md:text-[1vw] text-[3vw]">
            Oxirgi yangilanish
          </p>
          <b className="text-[#006BC5] md:text-[1vw] text-[3vw]">
            {getPreviousMonday()}
          </b>
        </div>
      </div>

      {bestProducts.length > 1 && (
        <div className="p-[7vw] pt-0">
          <div className="grid justify-between md:p-[3vw] p-[9vw] bg-[#9dcbf891] md:gap-[2vw] gap-[5vw] md:grid-cols-4 grid-cols-2 rounded-[3vw]">
            {bestProducts?.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </div>
        </div>
      )}
      <div className="grid justify-between p-[7vw] gap-[2vw] md:grid-cols-4 grid-cols-2 pt-0">
        {products.slice(0, page)?.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
