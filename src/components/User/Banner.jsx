import CoverImage from "./../../images/cover.jpg";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import "./../../css/Banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = ({ user, setPage, page, isOwnProfile }) => {
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
            <p>
              {user.name}{" "}
              {isOwnProfile && (
                <Link to="/settings" className="icon">
                  <FontAwesomeIcon icon={faCog} />
                </Link>
              )}
            </p>
          </div>

          <div className="stats">
            <p
              className={`item ${page === 1 && "active"}`}
              onClick={() => setPage(1)}
            >
              <span>{user.posts.length}</span> Posts
            </p>
            <p
              className={`item ${page === 2 && "active"}`}
              onClick={() => setPage(2)}
            >
              <span>{user.followers.length}</span> Followers
            </p>
            <p
              className={`item ${page === 3 && "active"}`}
              onClick={() => setPage(3)}
            >
              <span>{user.following.length}</span> Following
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
