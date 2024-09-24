import Logout from "../../auth/Logout";
import { Routes, Route } from "react-router-dom";
import useCheckAuthStatus from "../../auth/authCheck";
import AuthorNavbar from "./AuthorNavBar";
import AuthorHome from "./AuthorHome";

export default function AuthorLayout({ children }) {
  const { checkingAuthStatus } = useCheckAuthStatus("author");

  if (checkingAuthStatus) {
    return <>Checking your authentication status. Please wait...</>;
  }

  return (
    <>
      {children}
      <AuthorNavbar />
      <Routes>
        <Route path="/home" element={<AuthorHome />} />
        <Route path="/logout" element={<Logout role="author" />} />
      </Routes>
    </>
  );
}
