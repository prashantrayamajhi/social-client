import { followUser, unfollowUser } from "./../../../actions/follow";
import { getLoggedInUser } from "./../../../actions/profile";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../../../css/Follow.scss";

const Follow = ({ user }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.profile.loggedInUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);

  return (
    loggedInUser && (
      <>
        {user.followers.includes(loggedInUser._id) ? (
          <button
            className="following"
            style={{
              color: "#fff",
              backgroundColor: "#e00707",
              border: "none",
            }}
            onClick={() => {
              dispatch(unfollowUser(user._id, id));
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(followUser(user._id, id));
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
