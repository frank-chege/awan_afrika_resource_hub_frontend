//main app component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./pages/auth/GlobalContext";
import NavBar from "./pages/common/NavBar";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./pages/roles/admin/AdminLayout";
import AuthorLayout from "./pages/roles/authors/AuthorLayout";
import ViewerLayout from "./pages/roles/viewers/ViewerLayout";

export default function App() {
  return (
    <Router>
      <ToastContainer position="top-center" limit={3} />
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/author/*" element={<AuthorLayout />} />
        <Route path="/viewer/*" element={<ViewerLayout />} />
      </Routes>
    </Router>
  );
}
