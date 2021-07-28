import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./../../css/Profile.scss";
import Banner from "./Banner";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../actions/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faFemale,
  faInfoCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// images
import Github from "./../../images/github.png";
import Linkedin from "./../../images/linkedin.png";
import Link from "./../../images/link.png";
import Instagram from "./../../images/instagram.png";
import Facebook from "./../../images/facebook.png";
import Youtube from "./../../images/youtube.png";

import Posts from "./Posts";
import Followers from "./Followers";
import Following from "./Following";

const Profile = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const displayPage = () => {
    switch (page) {
      case 1:
        return <Posts user={user} />;
      case 2:
        return <Followers />;
      case 3:
        return <Following />;
      default:
        return <Posts user={user} />;
    }
  };

  return (
    <>
      <Navbar />
      {user && (
        <>
          <Banner user={user} page={page} setPage={setPage} />
          <div className="profile-container">
            {displayPage()}
            <div className="about">
              <h4>About Me</h4>
              {user.bio && (
                <div className="info">
                  <p>
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                    {user.bio}
                  </p>
                </div>
              )}
              <div className="info">
                <p>
                  <FontAwesomeIcon
                    icon={user.gender === "male" ? faMale : faFemale}
                    className="icon"
                  />
                  {user.gender}
                </p>
              </div>
              <div className="info">
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  {user.address}
                </p>
              </div>
              <div className="info social">
                {user.github && (
                  <a href={user.github} target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" className="icon" />
                  </a>
                )}
                {user.linkedin && (
                  <a href={user.linkedin} target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="linkedin" className="icon" />
                  </a>
                )}
                {user.website && (
                  <a href={user.website} target="_blank" rel="noreferrer">
                    <img src={Link} alt="" className="icon" />
                  </a>
                )}
                {user.instagram && (
                  <a href={user.instagram} target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="" className="icon" />
                  </a>
                )}
                {user.facebook && (
                  <a href={user.facebook} target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="" className="icon" />
                  </a>
                )}
                {user.youtube && (
                  <a href={user.youtube} target="_blank" rel="noreferrer">
                    <img src={Youtube} alt="" className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
