import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBackSvg } from "./Svgs";

function Goback() {
  const navigate = useNavigate();
  return (
    window.innerWidth < 768 && (
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-[1vw] bg-[#2ca4ff8f] rounded-[10vw] pr-[2vw] mb-[5vw]"
      >
        <GoBackSvg />
        <p className="text-[#006BC5] text-[5vw] ">Orqaga</p>
      </button>
    )
  );
}

export default Goback;
