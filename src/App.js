import React from "react";
import {Provider} from 'react-redux';
import "./assets/styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Brands from "./pages/Brands";
import Products from "./pages/Products";
import Offer from "./pages/Offer";
import store from "./redux";
import Likes from "./pages/Likes";
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offer/:id" element={<Offer />} />
            <Route path="/likes" element={<Likes />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
