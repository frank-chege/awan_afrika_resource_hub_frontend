import Logout from "../../common/Logout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { checkAuthStatus } from "../../auth/checkAuthStatus";
import { toast } from "react-toastify";
import AuthorNavbar from "./AuthorNavBar";
import AuthorHome from "./AuthorHome";

export default function AuthorLayout({ children }) {
  const navigate = useNavigate();

  //check auth status
  useEffect(() => {
    const authStatus = async () => {
      await checkAuthStatus();
    };
    if (!authStatus) {
      toast("Permission denied! Please login to continue");
      navigate("/login");
    }
    authStatus();
  }, [navigate]);

  return (
    <>
      {children}
      <AuthorNavbar />
      <Routes>
        <Route path="/home" element={<AuthorHome />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
