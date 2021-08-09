import { useDispatch } from "react-redux";
import { deleteComment } from "./../../actions/post";

import "./index.scss";

const Delete = ({ postId, commentId, id, setDeleteModal }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteComment(postId, commentId, id));
    setDeleteModal(false);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="title">
          <h3 className="delete">Delete !</h3>
        </div>
        <p>Are you sure you want to delete this comment ?</p>
        <div className="btn-wrapper">
          <button
            className="cancel"
            onClick={() => {
              setDeleteModal(false);
            }}
          >
            Cancel
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
