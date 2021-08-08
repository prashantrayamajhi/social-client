import Navbar from "./../Navbar/Navbar";
import "./../../css/Post.scss";
import "./index.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "./../../actions/post";

import Post from "./Post";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
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
            <div className="comments"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
