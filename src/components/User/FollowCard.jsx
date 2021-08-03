import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";

const FollowCard = ({ isFollowing, followers, following }) => {
  const displayFollowers = () => {
    if (isFollowing) {
      if (following) {
        return following.map((profile, index) => {
          console.log(profile);
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
        return <></>;
      }
    } else {
      if (followers) {
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
      } else {
        return <></>;
      }
    }
  };

  return displayFollowers();
};

export default FollowCard;
