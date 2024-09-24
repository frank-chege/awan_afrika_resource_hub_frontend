import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { configureRequest } from "../common/utils";
import { toast } from "react-toastify";
import useCheckAuthStatus from "./authCheck";

export default function Logout({ role }) {
  const navigate = useNavigate();
  const request = configureRequest();
  const { checkingAuthStatus, isAuthenticated } = useCheckAuthStatus(role);
  const loadingToast = toast.loading("Logging out");

  useEffect(() => {
    const sendLogoutRequest = async () => {
      try {
        const response = await request.post("/auth/logout");
        return response.data && response.data.status === "true";
      } catch (error) {
        return false;
      }
    };
    const logout = async () => {
      const logoutStatus = await sendLogoutRequest();
      if (!logoutStatus) {
        toast.error("Logout failed");
      }
      navigate("/");
    };
    if (!checkingAuthStatus && isAuthenticated) {
      logout();
    }
  }, [role, navigate, checkingAuthStatus, isAuthenticated]);

  if (checkingAuthStatus) {
    loadingToast;
    return null;
  }

  return toast.update(loadingToast, toast.success("Logged out successfully"));
}
