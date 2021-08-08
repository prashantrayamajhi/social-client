import "./index.scss";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useState } from "react";
import DeleteModal from "./../Modals/Delete";
import EditModal from "./../Modals/Edit";

import { useDispatch } from "react-redux";
import { likePost } from "./../../actions/posts";

const Post = ({ post }) => {
  const userId = localStorage.getItem("id");

  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    post && (
      <>
        {deleteModal && (
          <DeleteModal id={post._id} setDeleteModal={setDeleteModal} />
        )}
        {editModal && (
          <EditModal
            id={post._id}
            setEditModal={setEditModal}
            postTitle={post.title ? post.title : ""}
          />
        )}
        <div className="post">
          <div className="header">
            <div className="img-wrapper">
              <Link to={`/profile/${post.user._id}`} className="title">
                <img
                  src={
                    post.user.image
                      ? post.user.image
                      : post.user.gender === "male"
                      ? MaleImage
                      : FemaleImage
                  }
                  alt={post.user.name}
                />

                <p>{post.user.name}</p>
              </Link>
            </div>
            {post.user._id === userId && (
              <div className="author">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  className="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                {isMenuOpen && (
                  <div className="menu">
                    <p
                      onClick={() => {
                        setIsMenuOpen(false);
                        setEditModal(true);
                      }}
                    >
                      Edit
                    </p>
                    <p
                      onClick={() => {
                        setIsMenuOpen(false);
                        setDeleteModal(true);
                      }}
                    >
                      Delete
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="body">
            {post.image && (
              <div className="image-body">
                {post.title && <p>{post.title}</p>}
                <img src={post.image} alt={post?.title} />
              </div>
            )}
            {!post.image && post.title && (
              <div className="title-body">
                <p>{post.title}</p>
              </div>
            )}
          </div>

          <div className="footer">
            <p
              className={`like ${post.likes.includes(userId) && "liked"}`}
              onClick={() => {
                dispatch(likePost(post._id));
              }}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>Like {post.likes.length}</span>
            </p>
            <p>Comment</p>
            <p>Report</p>
          </div>
        </div>
      </>
    )
  );
};

export default Post;
