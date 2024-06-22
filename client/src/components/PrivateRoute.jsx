import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("auth");

  // console.log("auth at private route", auth);

  return JSON.parse(auth) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
