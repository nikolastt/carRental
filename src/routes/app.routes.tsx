import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "../pages/Booking";
import PageServices from "../pages/PageServices";

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageServices />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
