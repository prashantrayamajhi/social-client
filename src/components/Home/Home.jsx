import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, createPost } from "./../../actions/posts";
import Post from "./../Post/Post";
import Navbar from "./../Navbar/Navbar";
import config from "./../../helpers/config";
import "./index.scss";

const Home = () => {
  const [title, setTitle] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { title, anonymous };
    dispatch(createPost(data, config));
    setTitle("");
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
              <label htmlFor="anonymous">Anonymous</label>
              <input
                type="checkbox"
                id="anonymous"
                value={anonymous}
                onChange={() => setAnonymous(!anonymous)}
                style={{ marginLeft: "0.5rem" }}
              />
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
