import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./../../actions/posts";
import Post from "./../Post/Post";
import Navbar from "./../Navbar/Navbar";
import "./index.scss";

const Home = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="posts">
          <div className="create">
            <h3>Create a post</h3>
            <textarea placeholder="What on you mind ?"></textarea>
            <button>Post</button>
          </div>
          {posts.posts &&
            posts.posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
