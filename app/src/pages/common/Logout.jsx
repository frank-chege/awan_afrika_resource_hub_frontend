import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../auth/contextProvider";
import { useEffect } from "react";
import { configureRequest } from "./utils";
import { toast } from "react-toastify";

export default function Logout() {
  const { setLoginRole } = useGlobalContext();
  const navigate = useNavigate();
  const request = configureRequest();

  useEffect(() => {
    const logout = async () => {
      request
        .post("/auth/logout")
        .then((res) => {
          toast.success(res.data.message);
          setLoginRole("");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Logout failed");
        });
    };
    logout();
  }, [role, navigate]);
}
