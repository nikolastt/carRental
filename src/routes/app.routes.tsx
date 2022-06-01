import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVeicle from "../pages/AddVeicle";
import Booking from "../pages/Booking";
import PageServices from "../pages/PageServices";
import { PrivateRoutes } from "./privateRoutes";

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageServices />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/booking" element={<Booking />} />
          <Route path="/myFavorites" element={<Booking />} />
          <Route path="/addVeicle" element={<AddVeicle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
