import Card from "./Card";

const FollowCard = ({ isFollowing, followers, following }) => {
  const displayFollowers = () => {
    if (isFollowing) {
      return following.map((profile, index) => {
        return <Card key={index} isFollowing={true} profile={profile} />;
      });
    } else {
      return followers.map((profile, index) => {
        return <Card key={index} isFollowing={false} profile={profile} />;
      });
    }
  };
  return displayFollowers();
};

export default FollowCard;
