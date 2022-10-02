import { createReducer } from "@reduxjs/toolkit";
import { setLanguage, setLikeCount, setSearch } from "../../actions/languageActions";
import langs from "../../../localization/langs.json";

const initialState = {
  language: langs[localStorage["lang"] || "uz"],
  currentLang: localStorage["lang"] || "uz",
  searchValue: "",
  countLike:
    (localStorage["like"] && JSON?.parse(localStorage["like"])?.length) || 0
};

const reducer = createReducer(initialState, {
  [setLanguage]: (state, action) => {
    localStorage.setItem("lang", action.payload);
    return {
      ...state,
      language: langs[action.payload],
      currentLang: action.payload
    };
  },
  [setLikeCount]: (state, action) => {
    return {
      ...state,
      countLike: action.payload
    };
  },
  [setSearch]: (state, action) => {
    return {
      ...state,
      searchValue: action.payload
    };
  }
});

export default reducer;
