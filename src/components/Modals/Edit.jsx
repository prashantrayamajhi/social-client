import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "./../../actions/posts";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Edit = ({ id, postTitle, setEditModal }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(postTitle);
  }, [postTitle]);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="title">
          <h3>Edit</h3>
          <FontAwesomeIcon
            icon={faTimes}
            className="icon"
            onClick={() => {
              setEditModal(false);
            }}
          />
        </div>
        <textarea
          value={title}
          placeholder="Enter a title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <div className="btn-wrapper">
          <button
            className="update"
            onClick={() => {
              dispatch(updatePost(title, id));
              setEditModal(false);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
