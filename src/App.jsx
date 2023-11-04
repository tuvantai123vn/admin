import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Chat/Chat";
import Header from "./Header/Header";
import History from "./History/History";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Products from "./Products/Products";
import Users from "./Users/Users";
import NewProduct from "./New/NewProduct";
import Update from "./update/update";
import { useEffect, useState } from "react";
import Login from "./Login/Login";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const cookies = new Cookies();
  const [login, setLogin] = useState(false);
  const token = cookies.get("accessToken");
  const decodedToken = token ? jwtDecode(token) : {};
  const { role } = decodedToken;
  useEffect(() => {
    if (token) {
      console.log("token", token);
      setLogin(true);
    }
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <div
          id="main-wrapper"
          data-theme="light"
          data-layout="vertical"
          data-navbarbg="skin6"
          data-sidebartype="full"
          data-sidebar-position="fixed"
          data-header-position="fixed"
          data-boxed-layout="full"
        >
          <Header user={decodedToken} />
          <Menu login={login} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            {/* <Route
              path="/chat"
              element={
                <ProtectedRoute
                  roles={["admin", "customer"]}
                  role={role}
                  element={<Chat />}
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <ProtectedRoute
                  roles={["admin"]}
                  role={role}
                  element={<Home />}
                />
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute
                  roles={["admin"]}
                  role={role}
                  element={<Users />}
                />
              }
            />
            <Route
              exact
              path="/products"
              element={
                <ProtectedRoute
                  roles={["admin"]}
                  role={role}
                  element={<Products />}
                />
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute
                  roles={["admin"]}
                  role={role}
                  element={<History />}
                />
              }
            />
            <Route
              path="/new"
              element={
                <ProtectedRoute
                  roles={["admin"]}
                  role={role}
                  element={<NewProduct />}
                />
              }
            />
            <Route
              path="/products/view-edit/:id"
              element={
                <ProtectedRoute
                  roles={["admin"]}
                  role={role}
                  element={<Update />}
                />
              }
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
