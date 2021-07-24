import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "./../../api/server";
import "./index.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    localStorage.getItem("id") &&
      localStorage.getItem("name") &&
      localStorage.getItem("token") &&
      localStorage.getItem("email")((window.location.href = "/"));
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      const data = { email, password };
      const res = await Axios.post("/api/v1/auth/login", data);
      if (res.status === 200) {
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);
        setIsDisabled(false);
        setErr("");
        window.location.href = "/";
      }
      setIsDisabled(false);
    } catch (err) {
      if (err.response.data.type === "not-verified") {
        window.location.href = "/auth/user/verify/" + email;
      }
      console.log(err);
      setErr(err.response.data.err);
      setIsDisabled(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <h2>Login</h2>
        <form onSubmit={onFormSubmit}>
          {err && (
            <div className="err">
              <p>{err}</p>
            </div>
          )}
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
            <button type="submit" disabled={isDisabled}>
              Login
            </button>
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
