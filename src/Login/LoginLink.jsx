import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

function LoginLink(props) {
  const cookies = new Cookies();
  const cookie = cookies.get("accessToken");

  const onRedirect = () => {
    axios.delete("http://localhost:5001/auth/logout", {cookie});
    cookies.remove("accessToken");
  };

  return (
    <div onClick={onRedirect}>
        Logout
    </div>
  );
}

export default LoginLink;
