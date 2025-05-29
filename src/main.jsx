import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import UserRegister from "./components/user/UserRegister.jsx";
import UserLogin from "./components/User/UserLogin.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="contacts" element={<div>Contacts</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
