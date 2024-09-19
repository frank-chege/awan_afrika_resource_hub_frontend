//logout and clear auth tokens
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../auth/GlobalContext";
import { useEffect } from "react";
import { configureRequest } from "./utils";

export default function Logout() {
  const { role, setRole } = useGlobalContext();
  const navigate = useNavigate();
  const request = configureRequest();
  //set role to public
  setRole("public");
  useEffect(() => {
    setRole("public");
    navigate("/");
  }, [authStatus, role]);
}
