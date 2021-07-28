import FollowCard from "./FollowCard";
import "./../../css/Follow.scss";

const Following = () => {
  return (
    <div className="left">
      <div className="follow">
        <h3>Following</h3>
        <div className="list">
          <FollowCard following={true} />
        </div>
      </div>
    </div>
  );
};

export default Following;
