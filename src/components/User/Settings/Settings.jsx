import { useEffect, useState } from "react";
import Navbar from "./../../Navbar/Navbar";
import "./../../../css/Settings.scss";
import { useSelector, useDispatch } from "react-redux";
import MaleImage from "./../../../images/male.png";
import FemaleImage from "./../../../images/female.png";
import { getUser } from "./../../../actions/profile";

// components
import General from "./General";
import Profile from "./Profile";
import Account from "./Account";

const Settings = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const displaySetting = () => {
    switch (page) {
      case 1:
        return <General />;
      case 2:
        return <Profile />;
      case 3:
        return <Account />;
      default:
        return <General />;
    }
  };

  return (
    <div>
      <Navbar />
      {user && (
        <div className="settings">
          <div className="header">
            <img
              src={
                user.image
                  ? user.image
                  : user.gender === "male"
                  ? MaleImage
                  : FemaleImage
              }
              alt={user.name}
            />
            <p>{user.name}</p>
          </div>
          <div className="nav">
            <p
              className={`item ${page === 1 && "active"}`}
              onClick={() => setPage(1)}
            >
              General
            </p>
            <p
              className={`item ${page === 2 && "active"}`}
              onClick={() => setPage(2)}
            >
              Profile
            </p>
            <p
              className={`item ${page === 3 && "active"}`}
              onClick={() => setPage(3)}
            >
              Account
            </p>
          </div>
          <div className="body">{displaySetting()}</div>
        </div>
      )}
    </div>
  );
};

export default Settings;
