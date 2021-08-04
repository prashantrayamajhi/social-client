import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import { Link } from "react-router-dom";
import Follow from "./Functionality/Follow";

const Card = ({ profile }) => {
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
      <Follow user={profile} />
    </div>
  );
};

export default Card;
