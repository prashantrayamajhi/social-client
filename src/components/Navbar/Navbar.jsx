import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./../../actions/auth";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <nav>
      <div className="nav-brand">
        <Link to="/" className="brand">
          <h3>Social</h3>
        </Link>
      </div>
      <div className="nav-list">
        <Link
          to={`/profile/${localStorage.getItem("id")}`}
          className="nav-link"
        >
          Profile
        </Link>
        <p
          className="nav-link"
          onClick={() => {
            dispatch(logout());
            history.push("/login");
          }}
        >
          Logout
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
