import CoverImage from "./../../images/cover.jpg";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import "./../../css/Banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Follow from "./Functionality/Follow";

const Banner = ({ user, isOwnProfile }) => {
  return (
    user && (
      <div className="banner">
        <div className="cover">
          <img src={CoverImage} alt="cover" />
        </div>
        <div className="details">
          <div className="profile">
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
            <p className="action">{user.name}</p>
          </div>

          <div className="stats">
            <div className="list">
              <Link to={`/profile/${user._id}`} className={"item"}>
                <span>{user.posts.length}</span> Posts
              </Link>
              <Link to={`/followers/${user._id}`} className={"item"}>
                <span>{user.followers.length}</span> Followers
              </Link>
              <Link to={`/following/${user._id}`} className={"item"}>
                <span>{user.following.length}</span> Following
              </Link>
            </div>
            <div className="actions">
              {isOwnProfile ? (
                <Link to="/settings" className="icon">
                  <span>Edit Profile</span>
                  <FontAwesomeIcon icon={faCog} />
                </Link>
              ) : (
                <Follow user={user} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
