import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import UserRegister from "./components/user/UserRegister.jsx";
import UserLogin from "./components/User/UserLogin.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserLogout from "./components/User/UserLogout.jsx";
import CreateContact from "./components/Contact/CreateContact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="users">
            <Route path="profile" element={<UserProfile />}></Route>
            <Route path="logout" element={<UserLogout />}></Route>
          </Route>

          <Route path="contacts">
            {/* index default halaman */}
            <Route index element={<div>Contacts</div>}></Route>
            <Route path="create" element={<CreateContact />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
