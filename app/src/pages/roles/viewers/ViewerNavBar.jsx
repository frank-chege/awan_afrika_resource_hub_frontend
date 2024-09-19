//doctor portal navigation bar
import { Link } from "react-router-dom";

function ViewerNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/viewer/home">
          Home
        </Link>
        <Link className="navbar-brand" to="/viewer/logout">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default ViewerNavBar;
