import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";

const FollowCard = ({ isFollowing, followers, following }) => {
  const displayFollowers = () => {
    if (isFollowing) {
      return following.map((profile, index) => {
        return (
          <div className="card" key={index}>
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
            <button className="following">Following</button>
          </div>
        );
      });
    } else {
      return followers.map((profile, index) => {
        return (
          <div className="card" key={index}>
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
            <button className="following">Following</button>
          </div>
        );
      });
    }
  };

  return displayFollowers();
};

export default FollowCard;
