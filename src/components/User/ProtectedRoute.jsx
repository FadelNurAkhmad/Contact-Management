// src/components/User/ProtectedRoute.jsx
import { useLocalStorage } from "react-use";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const [token, _] = useLocalStorage("token", "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
    // replace: true, user tidak bisa kembali ke /dashboard dengan tombol back.
  }, [token, navigate]);

  // Saat token belum ada, jangan render Outlet
  if (!token) return null;

  // Outlet adalah tempat untuk render child route
  return <Outlet />;
}
