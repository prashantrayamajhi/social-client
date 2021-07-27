import CoverImage from "./../../images/cover.jpg";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import "./../../styles/Banner.scss";

const Banner = ({ user }) => {
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
            <p>{user.name}</p>
          </div>
          <div className="stats">
            <p>
              <span>{user.posts.length}</span> Posts
            </p>
            <p>
              <span>{user.followers.length}</span> Followers
            </p>
            <p>
              <span>{user.following.length}</span> Following
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
