import { followUser, unfollowUser } from "./../../../actions/follow";
import { getLoggedInUser } from "./../../../actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./../../../css/Follow.scss";

const Follow = ({ user }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.profile.loggedInUser);

  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);

  return (
    loggedInUser && (
      <>
        {user.followers.includes(loggedInUser._id) ? (
          <button
            className="following"
            onClick={() => {
              dispatch(unfollowUser(user._id));
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(followUser(user._id));
            }}
          >
            Follow
          </button>
        )}
      </>
    )
  );
};

export default Follow;
