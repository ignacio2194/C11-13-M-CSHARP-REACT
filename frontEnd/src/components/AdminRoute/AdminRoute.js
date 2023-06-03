import { Route, useNavigate } from "react-router-dom";
import React from "react";
import DashBoard from "../../views/admin/dashboard/dashboard";
 const AdminRoute = ({ element: Element, ...rest }) => {
  const isAdmin = JSON.parse(sessionStorage.getItem("rol"));
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Route {...rest} element={isAdmin==='admin'? <DashBoard /> : navigate("/")} />
    </React.Fragment>
  );
};
export default AdminRoute