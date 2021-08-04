import { followUser, unfollowUser } from "./../../../actions/follow";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "./../../../actions/profile";
import { useEffect } from "react";

const Follow = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.loggedInUser);

  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);

  return (
    user && (
      <>
        {user.following.includes(userId) ? (
          <button
            className="following"
            onClick={() => {
              dispatch(unfollowUser(userId));
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(followUser(userId));
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
