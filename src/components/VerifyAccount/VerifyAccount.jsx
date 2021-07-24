import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verify, resend } from "./../../actions/auth";
import "./VerifyAccount.scss";

const VerifyAccount = () => {
  const [token, setToken] = useState("");
  const { email } = useParams();

  const dispatch = useDispatch();

  const resendVerificationCode = () => {
    const data = { email };
    dispatch(resend(data));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = { token, email };
    dispatch(verify(data));
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
