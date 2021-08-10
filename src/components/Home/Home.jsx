import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, createPost } from "./../../actions/posts";
import Post from "./../Post/Post";
import Navbar from "./../Navbar/Navbar";
import config from "./../../helpers/config";
import Loading from "./../Utility/Loading";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);

  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    dispatch(createPost(formData, config));
    if (!loading) {
      setTitle("");
      setImage(null);
      setDisplayImage(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="posts">
          <div className="create">
            <h3>Create a post</h3>
            <form onSubmit={handleFormSubmit}>
              <textarea
                placeholder="What's on you mind ?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              <label htmlFor="file">
                <FontAwesomeIcon icon={faUpload} className="upload" />
                <span>Upload Image</span>
                <input
                  id="file"
                  type="file"
                  name="image"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setDisplayImage(URL.createObjectURL(e.target.files[0]));
                  }}
                  hidden
                />
              </label>
              {displayImage && (
                <img
                  alt=""
                  src={displayImage}
                  className="displayImage"
                  onClick={() => {
                    setDisplayImage(null);
                    setImage(null);
                  }}
                />
              )}
              <br />
              {loading ? (
                <Loading />
              ) : (
                <button type="submit" disabled={loading}>
                  Post
                </button>
              )}
            </form>
          </div>

          {posts.length > 0 ? (
            posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })
          ) : (
            <p className="loading"></p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
