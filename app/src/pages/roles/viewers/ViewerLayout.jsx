//viewer layout

import Logout from "../../common/Logout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { checkAuthStatus } from "../../auth/checkAuthStatus";
import { toast } from "react-toastify";
import ViewerNavBar from "./ViewerNavBar";
import ViewerHome from "./ViewerHome";

export default function ViewerLayout({ children }) {
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
      <ViewerNavBar />
      <Routes>
        <Route path="/home" element={<ViewerHome />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
