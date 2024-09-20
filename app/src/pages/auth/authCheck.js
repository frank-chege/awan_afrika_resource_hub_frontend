//check authentication status
import { useEffect, useState } from "react";
import { configureRequest, getCookieValue } from "../common/utils";
import { useGlobalContext } from "./contextProvider";
import { useNavigate } from "react-router-dom";

const useCheckAuthStatus = () => {
  const request = configureRequest();
  const token = getCookieValue("csrf_token");
  console.log(token);
  const { loginRole } = useGlobalContext();
  const payload = { role: loginRole };
  const navigate = useNavigate();
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        await request.post("/auth/auth_status", payload, {
          headers: {
            "X-CSRFToken": token,
          },
        });
        return response.data && response.data.status === "true";
      } catch (error) {
        console.log("Authentication failed");
        return false;
      }
    };

    const checkStatus = async () => {
      const authenticated = await authCheck();
      if (!authenticated) {
        navigate("/login");
      }
      setCheckingAuthStatus(false);
    };
    checkStatus();
  }, [navigate, request, loginRole, token]);

  return { checkingAuthStatus };
};
export default useCheckAuthStatus;
