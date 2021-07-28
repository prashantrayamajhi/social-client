import FollowCard from "./FollowCard";
import "./../../css/Follow.scss";

const Followers = () => {
  return (
    <div className="left">
      <div className="follow">
        <h3>Followers</h3>
        <div className="list">
          <FollowCard following={false} />
        </div>
      </div>
    </div>
  );
};

export default Followers;
