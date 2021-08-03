import { followUser } from "./../../../actions/follow";
import { useDispatch } from "react-redux";

const Follow = ({ userId }) => {
  const dispatch = useDispatch(0);
  return (
    <>
      <button
        onClick={() => {
          dispatch(followUser(userId));
        }}
      >
        Follow
      </button>
    </>
  );
};

export default Follow;
