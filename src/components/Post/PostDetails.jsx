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
            <div className="comments">
              <div className="comment">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="details">
                  <div className="meta">
                    <p>Prashant Rayamajhi</p>
                    <p>5:35 PM</p>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus eligendi, cumque excepturi deserunt, illo
                      accusantium, officiis ipsam nihil ipsa esse explicabo cum
                      quasi commodi saepe labore? Eveniet tenetur illo eius!
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="details">
                  <div className="meta">
                    <p>Prashant Rayamajhi</p>
                    <p>5:35 PM</p>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus eligendi, cumque excepturi deserunt, illo
                      accusantium, officiis ipsam nihil ipsa esse explicabo cum
                      quasi commodi saepe labore? Eveniet tenetur illo eius!
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="details">
                  <div className="meta">
                    <p>Prashant Rayamajhi</p>
                    <p>5:35 PM</p>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="details">
                  <div className="meta">
                    <p>Prashant Rayamajhi</p>
                    <p>5:35 PM</p>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      accusantium, officiis ipsam nihil ipsa esse explicabo cum
                      quasi commodi saepe labore? Eveniet tenetur illo eius!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
