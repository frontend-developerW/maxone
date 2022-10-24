import React from "react";
import { useLanguage } from "../redux/selectors";

function Terms() {
  const { language } = useLanguage();
  return (
    <div className="p-[7vw]">
      <div className="bg-[#9dcbf860] rounded-[2vw] p-[5vw]">
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms1"]}
        </p>
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms2"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms3"]}
        </p>
        <br />
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms4"]}
        </p>
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms5"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms7"]}
        </p>
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms8"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms9"]}
        </p>

        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms10"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms11"]}
        </p>

        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms12"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms13"]}
        </p>

        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms14"]}
        </p>
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms15"]}
        </h1>
        <br />
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms16"]}
        </p>

        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms17"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms18"]}
        </p>
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms19"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms20"]}
        </p>
        

        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms21"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms22"]}
        </p>


        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms23"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms24"]}
          <br />
          <br />
          {language["terms25"]}
        </p>

        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms26"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms27"]}
        </p>


        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms28"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms29"]}
        </p>


        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] my-[2vw]">
          {language["terms30"]}
        </h1>
        <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw] text-justify">
          {language["terms31"]}
        </p>
      </div>
    </div>
  );
}

export default Terms;
