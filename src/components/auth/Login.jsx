import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../actions/auth";
import "./index.scss";
import Loading from "./../Utility/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    localStorage.getItem("id") &&
      localStorage.getItem("name") &&
      localStorage.getItem("token") &&
      localStorage.getItem("email")((window.location.href = "/"));
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      dispatch(login(data));
    } catch (err) {
      if (err.response.data.type === "not-verified") {
        window.location.href = "/auth/user/verify/" + email;
      }
      console.log(err);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <h2>Login</h2>
        <form onSubmit={onFormSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              autoFocus
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="btn-wrapper">
            {loading ? (
              <Loading />
            ) : (
              <button type="submit" disabled={loading}>
                Login
              </button>
            )}
          </div>
          <p>
            Dont have an account ?{" "}
            <Link to="/signup">
              <span style={{ textDecoration: "underline", color: "#000" }}>
                Signup
              </span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
