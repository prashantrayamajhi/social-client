import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { followUser } from "./../../actions/follow";

const Card = ({ profile, isFollowing }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Link
        to={`/profile/${profile._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={
            profile.image
              ? profile.image
              : profile.gender === "male"
              ? MaleImage
              : FemaleImage
          }
          alt={profile.name}
        />
        <p>{profile.name}</p>
        <p className="username">@{profile.username}</p>
      </Link>
      <button
        className={`${isFollowing && "following"}`}
        onClick={() => {
          dispatch(followUser(profile._id));
        }}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Card;
