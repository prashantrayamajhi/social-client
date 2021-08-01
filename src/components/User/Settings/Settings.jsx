import { useEffect, useState } from "react";
import Navbar from "./../../Navbar/Navbar";
import "./../../../css/Settings.scss";
import { useSelector, useDispatch } from "react-redux";
import MaleImage from "./../../../images/male.png";
import FemaleImage from "./../../../images/female.png";
import { getUser, updateProfilePicture } from "./../../../actions/profile";

// components
import General from "./General";
import Profile from "./Profile";
import Account from "./Account";

const Settings = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const user = useSelector((state) => {
    if (
      state.profile.user &&
      state.profile.user._id === localStorage.getItem("id")
    ) {
      return state.profile.user;
    }
  });
  useEffect(() => {
    dispatch(getUser(localStorage.getItem("id")));
  }, [dispatch]);

  const displaySetting = () => {
    switch (page) {
      case 1:
        return <General user={user} />;
      case 2:
        return <Profile user={user} />;
      case 3:
        return <Account user={user} />;
      default:
        return <General user={user} />;
    }
  };

  const handleProfilePicture = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    dispatch(updateProfilePicture(formData, user._id));
  };

  return (
    <div>
      <Navbar />
      {user && (
        <div className="settings">
          <div className="header">
            <div>
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
            </div>
            <form onSubmit={handleProfilePicture}>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <button type="submit">Submit</button>
            </form>
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
