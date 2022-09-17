import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Like, NotLike } from "./Svgs";

function Card() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="w-full p-[2vw] bg-[#fff] border rounded-[2vw] card">
      <img
        src="https://kattabozor.s3.eu-central-1.amazonaws.com/ri/034cffffd89130cf1955911385f5605d794c6c8f5bfe5fa83f6c8d0b531ab9be_k7blIK_640l.jpg"
        alt=""
        className="w-full"
      />
      <h1 className="h-bold text-[2vw] uppercase overflow-ellipsis overflow-hidden mt-[1vw] whitespace-nowrap w-full text-[#006BC5]">
        Asus rog 1050
      </h1>
      <p className="opacity-40 text-[1.5vw] mb-[.4vw]">Kompyuterlar</p>
      <p className="text-[#006BC5] text-[1.5vw] mb-[.4vw]">3 265 000 so‘m</p>
      <div className="flex items-center justify-between">
        <Link to="/offer" className="w-[70%] ">
          <button className="w-full bg-gradient-to-b from-[#74B4FF] to-[#3C84CF] text-[#fff] text-[1.4vw] p-[.5vw]  pr-[1.5vw] pl-[1.5vw] rounded-[1vw]">
            buy now
          </button>
        </Link>
        <button onClick={() => setLiked(!liked)}>
          {liked ? <Like /> : <NotLike />}
        </button>
      </div>
    </div>
  );
}

export default Card;
