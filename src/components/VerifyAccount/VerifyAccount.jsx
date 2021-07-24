import { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "./../../api/server";
import "./VerifyAccount.scss";

const VerifyAccount = () => {
  const [token, setToken] = useState("");
  const { email } = useParams();

  const resendVerificationCode = async () => {
    const data = { email };
    try {
      const res = await Axios.post("api/v1/auth/resend/", data);
      if (res.status === 200) {
        alert("Verification code sent, check your mail");
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.err);
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = { token, email };
    try {
      const res = await Axios.post("/api/v1/auth/verify/", data);
      console.log(res);
      if (res.status === 200) {
        alert("Your account has been activated, please login");
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.err);
    }
  };

  return (
    <>
      <div className="verification">
        <h3>Verify Your Account</h3>
        <p>Enter the verification code sent to {email}</p>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Verification Code"
          />
          <button style={{ cursor: "pointer" }} type="submit">
            Verify
          </button>
        </form>
        <p className="link" onClick={resendVerificationCode}>
          Resend Code
        </p>
      </div>
    </>
  );
};

export default VerifyAccount;
