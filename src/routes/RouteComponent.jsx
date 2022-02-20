import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Clothes } from "../components/Clothes";
import { Electronics } from "../components/Electronics";
import { Paintings } from "../components/Paintings";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const RouteComponent = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/paintings" element={<Paintings />} />
      </Routes>
      <Footer />
    </div>
  );
};
