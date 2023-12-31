import React, { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./Login.css";
import UserAPI from "../API/UserAPI";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const user = {
        email,
        password,
      };
      const responseData = await UserAPI.postSignUpAdmin(user);
      console.log(responseData);
      if (responseData.statusText === "OK") {
        console.log("responseData", responseData);
        navigate("/home");
        window.location.reload() 
        setLoad(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row">
          <div className="login">
            <div className="heading">
              <h2>Sign in</h2>
              <form>
                <div className="input-group input-group-lg">
                  <span className="input-group-addon">
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>

                <div className="input-group input-group-lg">
                  <span className="input-group-addon">
                    <i className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>

                <button type="button" className="float" onClick={onSubmit}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {load && redirect('/home')}
    </div>
  );
}

export default Login;
