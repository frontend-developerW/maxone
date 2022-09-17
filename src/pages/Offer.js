import React, { useState } from "react";
import Card from "../components/Card";
import { Like, NotLike } from "../components/Svgs";
import { slides } from "../utils";

function Offer() {
  const [ActiveSlide, setActiveSlide] = useState(slides[0].logo);
  const [liked, setLiked] = useState(false);
  const [color, setColor] = useState("red");
  return (
    <div className="p-[7vw]">
      <div className="flex gap-[4vw] mb-[4vw]">
        <div className="w-[50%] gap-[1vw] flex">
          <div className="border border-gray-600 bg-[#fff] flex items-center justify-center cursor-pointer rounded-[2vw] p-[1vw]">
            <img
              src={ActiveSlide}
              alt=""
              className="h-[30vw] w-[30vw] object-contain"
            />
          </div>
          <div className="flex flex-col gap-[1vw]">
            {slides.map((item) => (
              <div
                key={item.id}
                className="border border-gray-600 bg-[#fff] flex items-center justify-center cursor-pointer rounded-[2vw] p-[1vw]"
                onClick={() => {
                  setActiveSlide(item.logo);
                }}
              >
                <img
                  src={item.logo}
                  alt=""
                  className="h-[9vw] w-[100%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="m-bold text-[#006BC5] text-[3vw] mb-[3vw]">
            Smartfonlar
          </h1>
          <p className="text-[#006BC5] text-[1.7vw] mb-[2vw]">
            Apple Iphone 11 128 gb red
          </p>
          <p className="text-[#006BC5] text-[1.7vw]">Rangi</p>
          <div className="grid grid-cols-3 gap-[1vw] mt-[1vw]">
            {["red", "green", "blue", "orange"].map((item) => (
              <div
                onClick={() => setColor(item)}
                className={`p-[1vw] bg-[#fff] flex items-center border border-[#E3E3E3] rounded-[1vw] gap-[.5vw] ${
                  item === color && "border-[#868686]"
                } cursor-pointer`}
              >
                <button
                  className={`w-[1.5vw] h-[1.5vw] rounded-[3vw]`}
                  style={{ backgroundColor: item }}
                ></button>
                <p className="text-[#000000] h-bold text-[1vw]">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-[2vw] gap-[2vw]">
            <button className=" w-[40%] bg-gradient-to-b from-[#74B4FF] to-[#3C84CF] text-[#fff] text-[1.4vw] p-[.5vw]  pr-[1.5vw] pl-[1.5vw] rounded-[1vw]">
              buy now
            </button>

            <div className="card">
              <button onClick={() => setLiked(!liked)}>
                {liked ? <Like /> : <NotLike />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#006BC5] text-[1.7vw]">
          Дисплей Liquid Retina HD. <br />
          ЖК‑дисплей Multi-Touch с технологией IPS, на всю переднюю панель,
          диагональ 6,1 дюйма <br />
          1792×828 пикселей, 326 пикселей на дюйм <br />
          Контрастность 1400:1 (стандартная) <br />
          Технология True Tone. <br />
          Широкий цветовой охват (P3) <br />
          Тактильный отклик при нажатии <br />
          Яркость до 625 кд/м² (стандартная)
        </p>
      </div>
      <h1 className="m-bold text-[#006BC5] text-[3vw] mb-[3vw] text-center mt-[5vw]">
        Oxshash maxsulotlar
      </h1>
      <div className="grid justify-between gap-[2vw] grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Offer;
