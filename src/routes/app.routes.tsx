import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVeicle from "../pages/AddVeicle";
import Booking from "../pages/Booking";
import PageServices from "../pages/PageServices";

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageServices />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/myFavorites" element={<Booking />} />
        <Route path="/addVeicle" element={<AddVeicle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
