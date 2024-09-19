import Logout from "../../common/Logout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { checkAuthStatus } from "../../auth/checkAuthStatus";
import { toast } from "react-toastify";
import AdminNavbar from "./AdminNavBar";
import AdminHome from "./AdminHome";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  //check status status
  const authStatus = async () => {
    await checkAuthStatus();
  };
  if (!authStatus) {
    toast("Permission denied! Please login to continue");
    navigate("/login");
  }

  return (
    <>
      {...children}
      <AdminNavbar />
      <Routes>
        <Route path="/home" element={<AdminHome />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
