import { useDispatch } from "react-redux";
import { deletePost } from "./../../actions/posts";

import "./index.scss";

const Delete = ({ id, setDeleteModal }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deletePost(id));
    setDeleteModal(false);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="title">
          <h3>Delete !</h3>
          <p>Are you sure you want to delete this post ?</p>
        </div>
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
