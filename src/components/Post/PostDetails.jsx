import Navbar from "./../Navbar/Navbar";
import "./../../css/Post.scss";
import "./index.scss";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "./../../actions/post";

import Post from "./Post";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {post && (
        <div className="container">
          <Post post={post} isSinglePost={true} />
        </div>
      )}
    </>
  );
};

export default PostDetails;
