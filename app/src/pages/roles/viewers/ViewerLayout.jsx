//viewer layout

import Logout from "../../auth/Logout";
import { Routes, Route, useLocation } from "react-router-dom";
import useCheckAuthStatus from "../../auth/authCheck";
import ViewerNavBar from "./ViewerNavBar";
import ViewerHome from "./ViewerHome";
import Forbidden from "../../errors/Errors";

export default function ViewerLayout({ children }) {
  location = useLocation();
  const { checkingAuthStatus, isAuthenticated } = useCheckAuthStatus("viewer");

  if (checkingAuthStatus) {
    return <div>Checking your authentication status. Please wait...</div>;
  }
  if (!checkingAuthStatus && !isAuthenticated) {
    return <Forbidden previousPage={location.pathname} />;
  }
  return (
    <>
      {children}
      <ViewerNavBar />
      <Routes>
        <Route path="/home" element={<ViewerHome />} />
        <Route path="/logout" element={<Logout role="viewer" />} />
      </Routes>
    </>
  );
}
