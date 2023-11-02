import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element, roles, role }) => {
  const navigate = useNavigate();

  if (roles.includes(role)) {
    return element;
  } else {
    return navigate('/login');
  }
};

export default ProtectedRoute;
