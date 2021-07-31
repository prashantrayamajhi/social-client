import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, createPost } from "./../../actions/posts";
import Post from "./../Post/Post";
import Navbar from "./../Navbar/Navbar";
import config from "./../../helpers/config";
import "./index.scss";

const Home = () => {
  const [title, setTitle] = useState("");

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { title };
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
