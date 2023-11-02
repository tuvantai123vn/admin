import React from "react";
import { Outlet, Navigate } from "react-router-dom";


// const ProtectedRoute = ({ component: Component, roles, role, ...rest }) => {
//   return(
//   <Route
//     {...rest}
//     render={(props) =>
//       roles.includes(role) ? <Component {...props} role={role} />  : Navigate('/login')
//     }
//   />
// )};
const ProtectedRoute = ({ component: Component, roles, role, ...rest }) => {

  return roles.includes(role) ? children : <Navigate to="/login" />;
  
};


export default ProtectedRoute;
