import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "./../../api/server";
import "./index.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    localStorage.getItem("id") &&
      localStorage.getItem("name") &&
      localStorage.getItem("token") &&
      localStorage.getItem("email") &&
      (window.location.href = "/");
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      const data = { name, email, password, address };
      const res = await Axios.post("/api/v1/auth/signup", data);
      if (res.status === 201) {
        window.location.href = "/auth/user/verify/" + res.data.data.email;
        setIsDisabled(false);
        setErr("");
      }
    } catch (err) {
      console.log(err.response.data.err);
      setErr(err.response.data.err);
      setIsDisabled(false);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <h2>Signup</h2>
        <form onSubmit={onFormSubmit}>
          {err && (
            <div className="err">
              <p>{err}</p>
            </div>
          )}
          <div className="input-wrapper">
            <input
              type="text"
              value={name}
              autoFocus
              placeholder="Enter your full name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={username}
              placeholder="Enter a username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option disabled defaultValue>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={address}
              placeholder="Enter your address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              value={password}
              placeholder="Create a password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="terms">
            <p>By signing up you agree to our terms and conditions</p>
          </div>
          <div className="btn-wrapper">
            <button type="submit" disabled={isDisabled}>
              Signup
            </button>
          </div>
          <p>
            Already have an account ?{" "}
            <Link to="/login">
              <span style={{ textDecoration: "underline", color: "#000" }}>
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
