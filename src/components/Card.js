import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLikeCount, setSearch } from "../redux/actions/languageActions";
import { useLanguage } from "../redux/selectors";
import { Like, NotLike } from "./Svgs";

function Card({ data }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(
    (localStorage["like"] &&
      JSON.parse(localStorage["like"]).includes(data?.id)) ||
      false
  );
  const { currentLang } = useLanguage();
  const interestCount = localStorage["interestCount"] || 0;
  const interestPrice = localStorage["interestPrice"] || 0;
  const setCaounter = () => {
    dispatch(setSearch(''))
    localStorage.setItem("interestCount", Number(interestCount) + 1);
    localStorage.setItem("interestPrice", Number(interestPrice) + data?.price);
    localStorage.setItem(
      "recomend",
      (Number(interestPrice) + data?.price) / (Number(interestCount) + 1)
    );
  };
  Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

  const liker = (e) => {
    const all = localStorage["like"];
    if (all) {
      if (JSON.parse(all).includes(e)) {
        console.log(JSON.parse(all).removeByValue(e));
        localStorage.setItem("like", `[${JSON.parse(all).removeByValue(e)}]`);
      } else {
        if (JSON.parse(all).length < 1) {
          localStorage.setItem("like", `[${e}]`);
        } else {
          localStorage.setItem("like", `[${JSON.parse(all)},${e}]`);
        }
      }
    } else {
      if (!all) {
        localStorage.setItem("like", `[${e}]`);
      }
    }
    dispatch(setLikeCount(JSON.parse(localStorage["like"]).length));
  };
  return (
    <div className="hover:shadow-xl cursor-pointer transition-[.5s] hover:translate-y-[-1.4vw] w-full md:p-[2vw] bg-[#fff] border md:rounded-[2vw] rounded-[3.4vw] p-[3vw] card">
      <img
        src={`${data?.image || "https://maxone.abba.uz/files/111_1aBNoct.png"}`}
        alt=""
        className="w-full"
      />
      <h1 className="h-bold md:text-[2vw] text-[3.3vw] uppercase overflow-ellipsis overflow-hidden mt-[1vw] whitespace-nowrap w-full text-[#006BC5]">
        {data?.[`name_${currentLang}`] || "Name"}
      </h1>
      <p className="opacity-40 text-[3vw] md:text-[1.5vw] mb-[.4vw]">
        {data?.[`description_${currentLang}`] || "description"}
      </p>
      <p className="text-[#006BC5] text-[3vw] md:text-[1.5vw] mb-[.4vw]">
        {data?.price || "0"} so‘m
      </p>
      <div className="flex items-center justify-between">
        <Link to={"/offer/" + data?.id} className="w-[70%] ">
          <button
            onClick={setCaounter}
            className="w-full bg-gradient-to-b from-[#74B4FF] to-[#3C84CF] text-[#fff] text-[3vw] md:text-[1.4vw] md:p-[.5vw] py-[1.3vw]  pr-[1.5vw] pl-[1.5vw] md:rounded-[1vw] rounded-[2vw] hover:scale-[.9] transition-[.4s]"
          >
            buy now
          </button>
        </Link>
        <button
          onClick={() => {
            setLiked(!liked);
            liker(data?.id);
          }}
        >
          {liked ? <Like /> : <NotLike />}
        </button>
      </div>
    </div>
  );
}

export default Card;
