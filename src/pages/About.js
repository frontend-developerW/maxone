import React from "react";
import { useLanguage } from "../redux/selectors";

function About() {
  const { language } = useLanguage();
  return (
    <div className="p-[7vw]">
      <div className="bg-[#9dcbf860] rounded-[2vw] p-[5vw]">
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] mb-[2vw]">
          {language["f_1"]}
        </h1>
        <div className="flex items-center md:flex-row flex-col-reverse gap-[2vw]">
          <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
            {language["about_us"]}
          </p>
          <img
            src="https://www.gazeta.uz/media/img/2020/08/69PRDI15980068090844_b.jpg"
            className="md:w-[50%] w-[100%] rounded-[2vw]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
