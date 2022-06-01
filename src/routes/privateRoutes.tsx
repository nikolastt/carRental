import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const PrivateRoutes = () => {
  const userEmail = useSelector(
    (state: RootState) => state.userSlice.user.email
  );

  return userEmail ? <Outlet /> : <Navigate to="/" />;
};
