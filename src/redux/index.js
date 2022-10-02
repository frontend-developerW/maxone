import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import language from "./reducers/languageReducer";
const reducer = combineReducers({
  language
});

const store = configureStore(
  {
    reducer,
    devTools: true,
    middleware: [thunk]
  },
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
);

export default store;
