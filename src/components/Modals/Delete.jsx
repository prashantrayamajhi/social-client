import { useDispatch } from "react-redux";
import { deletePost } from "./../../actions/posts";

import "./index.scss";

const Delete = ({ id, setDeleteModal, isSinglePost }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deletePost(id, isSinglePost));
    setDeleteModal(false);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="title">
          <h3 className="delete">Delete !</h3>
        </div>
        <p>Are you sure you want to delete this post ?</p>
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
