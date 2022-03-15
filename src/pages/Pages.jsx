import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchPage from "./SearchPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<SearchPage />} />
    </Routes>
  );
};

export default Pages;
