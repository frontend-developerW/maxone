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
        <div className="grid grid-cols-4 gap-[2vw]">
          <div className="bg-white border border-black rounded-[1vw] h-[10vw] flex items-center justify-center cursor-pointer hover:border-[#006BC5]">
            <h1 className="m-regular text-center text-[#006BC5] text-[2.5vw]">
              Barchasi
            </h1>
          </div>
          {brands.map((item, i) => (
            <Link to="/products">
              <div
                key={i}
                className="bg-white border p-[1vw] border-black rounded-[1vw] h-[10vw] flex items-center justify-center cursor-pointer hover:border-[#006BC5]"
              >
                <h1 className="m-regular text-center text-[#006BC5] text-[2.5vw]">
                  <img
                    src={item?.logo}
                    className="w-full h-[8vw] object-contain"
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
