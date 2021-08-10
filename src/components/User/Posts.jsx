import Post from "./../Post/Post";
import { getPostsByUserId } from "./../../actions/posts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Posts = ({ id }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPostsByUserId(id));
  }, [dispatch, id]);

  return (
    posts && (
      <div className="left">
        {posts.length > 0 ? (
          posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })
        ) : (
          <div className="no-posts">
            <h3>No Posts Yet</h3>
          </div>
        )}
      </div>
    )
  );
};

export default Posts;
