import Card from "./Card";

const FollowCard = ({ isFollowing, followers, following, id }) => {
  const displayFollowers = () => {
    if (isFollowing) {
      return following.map((profile, index) => {
        return <Card key={index} profile={profile} id={id} />;
      });
    } else {
      return followers.map((profile, index) => {
        return <Card key={index} profile={profile} id={id} />;
      });
    }
  };
  return displayFollowers();
};

export default FollowCard;
