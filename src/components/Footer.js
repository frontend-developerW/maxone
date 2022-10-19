import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../redux/selectors";
import { getCategorys, getTypes } from "../requests";
import { FaceBookSvg, InstagramSvg, TwitterSvg } from "./Svgs";

function Footer() {
  const [categorys, setCategorys] = useState([]);
  const [types, setTypes] = useState([]);
  const { language, currentLang } = useLanguage();
  const getData = useCallback(async () => {
    try {
      const category = await getCategorys();
      setCategorys(category?.data);
      const type = await getTypes();
      setTypes(type?.data);
    } catch (e) {
      console.log("Error", e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-[5vw] md:pb-[5vw] pb-[40vw] pl-[7vw] pr-[7vw] bg-[#004B99] flex gap-[5vw] justify-between md:flex-row flex-col">
      <div className="flex md:items-stretch items-center justify-between md:w-[25%] w-full md:flex-col ">
        <img
          src={require("../assets/img/footer.png")}
          className="md:w-[4vw] w-[20vw]"
          alt=""
        />
        <p className="text-white text-[1.1vw] md:block hidden mt-[1.5vw]">
          {language["slogan"]}
        </p>
        <div className="flex items-center md:gap-[1vw] gap-[3vw] mt-[2vw]">
          <div className="md:w-[3vw] md:h-[3vw] w-[9vw] h-[9vw]  flex items-center justify-center rounded-[5vw] bg-[#396BB5] hover:bg-[#043885] cursor-pointer transition-[.8s] hover:rotate-[360deg]">
            <FaceBookSvg />
          </div>
          <div className="md:w-[3vw] md:h-[3vw] w-[9vw] h-[9vw]  flex items-center justify-center rounded-[5vw] bg-[#396BB5] hover:bg-[#043885] cursor-pointer transition-[.8s] hover:rotate-[360deg]">
            <TwitterSvg />
          </div>
          <div className="md:w-[3vw] md:h-[3vw] w-[9vw] h-[9vw]  flex items-center justify-center rounded-[5vw] bg-[#396BB5] hover:bg-[#043885] cursor-pointer transition-[.8s] hover:rotate-[360deg]">
            <InstagramSvg />
          </div>
        </div>
      </div>
      <ul>
        <li>
          <h1 className="text-white md:text-[1.5vw] text-[6.5vw] mt-[1.5vw]">
            {language["f_name1"]}
          </h1>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <Link
            to="/about"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["f_1"]}
          </Link>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <Link
            to="/terms"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["f_2"]}
          </Link>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="/#brands"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["f_3"]}
          </a>
        </li>
        {/* <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["f_4"]}
          </a>
        </li> */}
      </ul>
      <ul>
        <li className=" md:mr-0 mr-[5vw] md:block hidden">
          <h1 className="text-white text-[1.5vw]  mt-[1.5vw]">
            {language["f_name2"]}
          </h1>
        </li>
        {categorys?.map((item) => (
          <li className="md:flex inline-block md:mr-0 mr-[5vw]">
            <NavLink
              to={"/brands/" + item?.id}
              onClick={() => localStorage.setItem("category", item?.id)}
              className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
            >
              {item?.[`name_${currentLang}`]}
            </NavLink>
          </li>
        ))}
        {types?.map((item) => (
          <li className="md:flex inline-block md:mr-0 mr-[5vw]">
            <NavLink
              to={"/brands/" + item?.id}
              onClick={() => localStorage.setItem("category", item?.id)}
              className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
            >
              {item?.[`name_${currentLang}`]}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="md:block hidden">
        <li>
          <h1 className="text-white text-[1.5vw] mt-[1.5vw]">
            {language["f_name3"]}
          </h1>
        </li>

        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["number"]}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["mail"]}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            {language["adres"]}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
