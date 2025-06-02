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
import ContactList from "./components/Contact/ContactList.jsx";
import ContactEdit from "./components/Contact/ContactEdit.jsx";
import ContactDetail from "./components/Contact/ContactDetail.jsx";
import AddressCreate from "./components/Address/AddressCreate.jsx";

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
            <Route index element={<ContactList />}></Route>
            <Route path="create" element={<CreateContact />}></Route>
            <Route path=":id">
              <Route index element={<ContactDetail />}></Route>
              <Route path="edit" element={<ContactEdit />}></Route>
              <Route path="addresses">
                <Route path="create" element={<AddressCreate />} />
                {/* <Route path=":addressId/edit" element={<AddressEdit />} /> */}
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
