import Logout from "../../auth/Logout";
import { Routes, Route } from "react-router-dom";
import useCheckAuthStatus from "../../auth/authCheck";
import AdminNavbar from "./AdminNavBar";
import AdminHome from "./AdminHome";

export default function AdminLayout({ children }) {
  const { checkingAuthStatus } = useCheckAuthStatus("admin");

  if (checkingAuthStatus) {
    return <div>Checking your authentication status. Please wait...</div>;
  }

  return (
    <>
      {children}
      <AdminNavbar />
      <Routes>
        <Route path="/home" element={<AdminHome />} />
        <Route path="/logout" element={<Logout role="admin" />} />
      </Routes>
    </>
  );
}
