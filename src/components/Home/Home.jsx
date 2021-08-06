import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, createPost } from "./../../actions/posts";
import Post from "./../Post/Post";
import Navbar from "./../Navbar/Navbar";
import config from "./../../helpers/config";
import "./index.scss";

const Home = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);

  const posts = useSelector((state) => state.posts);
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
    setTitle("");
    setImage(null);
    setDisplayImage(null);
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
                placeholder="What on you mind ?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setDisplayImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
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
              <button type="submit">Post</button>
            </form>
          </div>
          {posts &&
            posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
