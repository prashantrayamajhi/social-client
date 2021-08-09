import Navbar from "./../Navbar/Navbar";
import "./../../css/Post.scss";
import "./index.scss";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import Moment from "react-moment";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "./../../actions/post";

import { postComment, deleteComment } from "./../../actions/post";

import Post from "./Post";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const userId = localStorage.getItem("id");

  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { postId: post._id, text };
    dispatch(postComment(data));
    setText("");
  };

  return (
    <>
      <Navbar />
      {post && (
        <div className="container">
          <Post post={post} isSinglePost={true} />
          <div className="commentsWrapper">
            <h2>
              Comments <span>{post.comments.length}</span>
            </h2>
            <form onSubmit={handleFormSubmit}>
              <textarea
                placeholder="Write a comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <div className="btn-wrapper">
                <button>Submit</button>
              </div>
            </form>
            <div className="comments">
              {post.comments.length > 0 &&
                post.comments.map((comment, index) => {
                  return (
                    <div key={index}>
                      <div className="comment">
                        <Link to={`/profile/${comment.user._id}`}>
                          <img
                            src={
                              comment.user.image
                                ? comment.user.image
                                : comment.user.gender === "male"
                                ? MaleImage
                                : FemaleImage
                            }
                            alt={post.user.name}
                          />
                        </Link>
                        <div className="details">
                          <div className="meta">
                            <Link
                              to={`/profile/${comment.user._id}`}
                              className="name"
                            >
                              {comment.user.name}
                            </Link>
                            <p>
                              <Moment fromNow>{comment.createdAt}</Moment>
                            </p>
                          </div>
                          <div className="text">
                            <p>{comment.comment}</p>
                            {comment.user._id === userId && (
                              <div
                                className="actions"
                                onClick={() => {
                                  dispatch(
                                    deleteComment(post._id, comment._id, userId)
                                  );
                                }}
                              >
                                <p>Delete</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
