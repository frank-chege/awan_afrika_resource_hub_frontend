//viewer layout

import Logout from "../../common/Logout";
import { Routes, Route } from "react-router-dom";
import useCheckAuthStatus from "../../auth/authCheck";
import ViewerNavBar from "./ViewerNavBar";
import ViewerHome from "./ViewerHome";

export default function ViewerLayout({ children }) {
  const { checkingAuthStatus } = useCheckAuthStatus();

  if (checkingAuthStatus) {
    return <>Checking your authentication status. Please wait...</>;
  }

  return (
    <>
      {children}
      <ViewerNavBar />
      <Routes>
        <Route path="/home" element={<ViewerHome />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
