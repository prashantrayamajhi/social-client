import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faFemale,
  faInfoCircle,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import "./../../css/Profile.scss";

// images
import Github from "./../../images/github.png";
import Linkedin from "./../../images/linkedin.png";
import Link from "./../../images/link.png";
import Instagram from "./../../images/instagram.png";
import Facebook from "./../../images/facebook.png";
import Youtube from "./../../images/youtube.png";

import { getUser } from "../../actions/profile";
import { useSelector, useDispatch } from "react-redux";

const About = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  return (
    user && (
      <>
        <div className="about">
          <h4>
            About Me{" "}
            <span
              style={{
                fontSize: "1rem",
                marginLeft: "0.9rem",
                fontWeight: "400",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              <p>@{user.username}</p>
            </span>
          </h4>
          {user.bio && (
            <div className="info">
              <p>
                <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                {user.bio}
              </p>
            </div>
          )}
          {user.dateOfBirth && (
            <div className="info">
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                <Moment format="YYYY/MM/DD">{user.dateOfBirth}</Moment>
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
      </>
    )
  );
};

export default About;
