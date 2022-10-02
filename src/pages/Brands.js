import React from "react";
import { brands } from "../utils";
import { Link } from "react-router-dom";
function Brands() {
  return (
    <div>
      <h1 className="m-bold text-center text-[#006BC5] text-[3vw]">
        Brendni tanlang
      </h1>
      <div className="p-[7vw] pt-[4vw]">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-[2vw]">
          <div className="bg-white border-[.1vw] border-black rounded-[1vw] md:h-[10vw] h-[20vw] flex items-center justify-center cursor-pointer hover:border-[#006BC5]">
            <h1 className="m-regular text-center text-[#006BC5] text-[2.5vw]">
              Barchasi
            </h1>
          </div>
          {brands.map((item, i) => (
            <Link to="/products" key={ i}>
              <div
                className="bg-white  p-[1vw] border-[.1vw] border-[#000] rounded-[1vw] md:h-[10vw] h-[20vw] flex items-center justify-center cursor-pointer hover:border-[#006BC5]"
              >
                <h1 className="m-regular text-center text-[#006BC5] text-[2.5vw]">
                  <img
                    src={item?.logo}
                    className="w-full md:h-[8vw] h-[16vw] object-contain"
                  />
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
